import {defineConfig} from "vitepress";
import {withMermaid} from "vitepress-plugin-mermaid";

import cli_docs from './sidebar_cli_docs.js'
import module_docs from './sidebar_module_docs.js'

export default withMermaid(
    defineConfig({
        title: 'EmpowerChain Docs',
        description: 'Documentation for everything EmpowerChain.',
        cleanUrls: true,
        themeConfig: {
            logo: '/logo.svg',
            socialLinks: [
                {icon: 'github', link: 'https://github.com/EmpowerPlastic/empowerchain'},
                {icon: 'twitter', link: 'https://twitter.com/empowerchain_io'},
            ],
            sidebar: [
                {
                    text: 'Introduction',
                    collapsed: true,
                    items: [
                        {
                            text: 'What is EmpowerChain?',
                            link: '/introduction/what-is-empowerchain'
                        },
                        {
                            text: 'Circular Economy',
                            link: '/introduction/circular-economy'
                        },
                        {
                            text: 'How it works',
                            link: '/introduction/how-it-works'
                        },
                        {
                            text: 'Applications',
                            link: '/introduction/applications'
                        },
                        {
                            text: 'Tokenomics',
                            link: '/introduction/tokenomics'
                        },
                        {
                            text: 'Roadmap',
                            link: '/introduction/roadmap'
                        }
                    ]
                },
                {
                    text: 'Governance',
                    collapsed: true,
                    items: []
                },
                {
                    text: 'Proof of Existence',
                    collapsed: true,
                    items: []
                },
                {
                    text: 'Plastic Credits',
                    collapsed: true,
                    items: [],
                },
                {
                    text: 'Developers',
                    collapsed: true,
                    items: [
                        {
                            text: 'Why and what to build on EmpwoerChain?',
                            link: '/developers/why-and-what-to-build-on-empowerchain'
                        },
                        {
                            text: 'Ways to build on EmpowerChain',
                            link: '/developers/ways-to-build-on-empowerchain'
                        },
                        {
                            text: 'Architecture',
                            link: '/developers/architecture'
                        }
                    ]
                },
                {
                    text: 'Validators',
                    collapsed: true,
                    items: [],
                },
                {
                    text: 'References',
                    collapsed: true,
                    items: [
                        {
                            text: 'Module docs',
                            collapsed: true,
                            items: module_docs
                        },
                    ].concat(cli_docs.concat([
                        {
                            text: 'API docs',
                            link: '/api_docs/swagger'
                        },
                    ]))
                },
            ]
        },
        mermaid: {
            // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
        },
    })
);