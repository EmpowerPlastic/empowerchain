package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
)

var modules = []string{"proofofexistence", "plasticcredit"}

func generateModuleDocs() {
	var moduleSidebarItems []VitepressSidebarItem
	for _, module := range modules {
		// Construct the path to the README file for this module
		readmePath := filepath.Join(chainDir, "x", module, "README.md")

		// Read the contents of the README file
		readmeBytes, err := os.ReadFile(readmePath)
		if err != nil {
			log.Fatalf("Failed to read README.md for module %s: %s", module, err)
		}

		// Construct the path where we want to write the README file for this module
		moduleDocsPath := filepath.Join(moduleDocsOuputDir, module+".md")

		// Write the contents of the README file to the moduleDocsPath
		err = os.WriteFile(moduleDocsPath, readmeBytes, os.ModePerm)
		if err != nil {
			log.Fatalf("Failed to write README.md for module %s: %s", module, err)
		}

		// Create sidebar item for this module
		moduleSidebarItems = append(moduleSidebarItems, VitepressSidebarItem{
			Text: module,
			Link: "/references/module-docs/" + module + ".md",
		})
	}
	fmt.Println("✅ Generated module docs")

	jsonSidebar, err := json.MarshalIndent(moduleSidebarItems, "", "  ")
	if err != nil {
		log.Fatal(err)
	}

	jsContent := "export default " + string(jsonSidebar)
	outputFilePath := filepath.Join(vitepressConfigOutputDir, "sidebar-module-docs.js")

	err = os.WriteFile(outputFilePath, []byte(jsContent), 0644)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("✅ Generated module docs vitepress structure")
}
