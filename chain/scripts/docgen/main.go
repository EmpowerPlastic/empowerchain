package main

import "os"

const (
	vitepressConfigOutputDir = "./output/.vitepress"
	cliDocsOuputDir          = "./output/cli-docs"
	moduleDocsOuputDir       = "./output/module-docs"
	chainDir                 = "../../"
)

type VitepressSidebarItem struct {
	Text       string                 `json:"text"`
	Link       string                 `json:"link,omitempty"`
	Collapsed  bool                   `json:"collapsed,omitempty"`
	Items      []VitepressSidebarItem `json:"items,omitempty"`
	parentItem *VitepressSidebarItem  `json:"-"`
}

func main() {
	if err := os.MkdirAll(vitepressConfigOutputDir, os.ModePerm); err != nil {
		panic(err)
	}
	if err := os.MkdirAll(cliDocsOuputDir, os.ModePerm); err != nil {
		panic(err)
	}
	if err := os.MkdirAll(moduleDocsOuputDir, os.ModePerm); err != nil {
		panic(err)
	}

	generateCLIDocs()
	generateModuleDocs()
}
