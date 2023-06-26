package main

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/EmpowerPlastic/empowerchain/cmd/empowerd/cmd"
	"github.com/spf13/cobra/doc"
)

func generateCLIDocs() {
	rootCmd, _ := cmd.NewRootCmd()
	rootCmd.DisableAutoGenTag = true

	if err := doc.GenMarkdownTree(rootCmd, cliDocsOuputDir); err != nil {
		log.Fatal(err)
	}
	fmt.Println("✅ Generated cli docs")

	var sidebarItems []VitepressSidebarItem
	if err := filepath.WalkDir(cliDocsOuputDir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() || filepath.Ext(path) != ".md" {
			return nil
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return err
		}

		// Replace invalid markdown
		re := regexp.MustCompile(`(?m)^Example:\n\$(.*)$`)
		newContent := re.ReplaceAllStringFunc(string(content), func(match string) string {
			lines := strings.Split(match, "\n")
			return "Example:\n```bash\n" + lines[1] + "\n```"
		})

		// Replace all instances of '<appd>' with 'empowerd'
		newContent = strings.ReplaceAll(newContent, "<appd>", "empowerd")
		newContent = strings.ReplaceAll(newContent, "<", `\<`)
		newContent = strings.ReplaceAll(newContent, ">", `\>`)

		err = os.WriteFile(path, []byte(newContent), 0644)
		if err != nil {
			return err
		}

		filename := d.Name()
		commandSplit := strings.Split(strings.TrimSuffix(filename, filepath.Ext(filename)), "_")
		sidebarItems = buildCLIDocsSidebarTree(sidebarItems, commandSplit, "/references/cli-docs/"+filename)

		return nil
	}); err != nil {
		log.Fatal(err)
	}

	for i := range sidebarItems {
		removeParentItem(&sidebarItems[i])
	}

	jsonSidebar, err := json.MarshalIndent(sidebarItems, "", "  ")
	if err != nil {
		log.Fatal(err)
	}

	jsContent := "export default " + string(jsonSidebar)
	outputFilePath := filepath.Join(vitepressConfigOutputDir, "sidebar-cli-docs.js")

	err = os.WriteFile(outputFilePath, []byte(jsContent), 0644)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("✅ Generated cli docs vitepress structure")
}

func buildCLIDocsSidebarTree(items []VitepressSidebarItem, commands []string, link string) []VitepressSidebarItem {
	command := commands[0]
	found := -1

	for idx, item := range items {
		if item.Text == command || (command == "empowerd" && item.Text == "CLI docs") {
			found = idx
			break
		}
	}

	if found == -1 {
		newItem := VitepressSidebarItem{
			Text: command,
		}
		if command == "empowerd" {
			newItem.Text = "CLI docs"
		}

		if len(commands) == 1 {
			newItem.Link = link
		} else {
			newItem.Collapsed = true
		}

		items = append(items, newItem)
		found = len(items) - 1
	} else if len(commands) > 1 {
		// Set Collapsed to true for an existing non-leaf item
		items[found].Collapsed = true
	}

	if len(commands) > 1 {
		items[found].Items = buildCLIDocsSidebarTree(items[found].Items, commands[1:], link)
	}

	return items
}

func removeParentItem(item *VitepressSidebarItem) {
	item.parentItem = nil
	for i := range item.Items {
		removeParentItem(&item.Items[i])
	}
}
