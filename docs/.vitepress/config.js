import {defineConfig} from "vitepress";
import {withMermaid} from "vitepress-plugin-mermaid";
import imageFigures from 'markdown-it-image-figures';

import cli_docs from './sidebar_cli_docs.js'
import module_docs from './sidebar_module_docs.js'

export default withMermaid(
    defineConfig({
        title: 'EmpowerChain Docs',
        description: 'Documentation for everything EmpowerChain.',
        cleanUrls: true,
        markdown: {
            config: (md) => {
                md.use(imageFigures, {
                    figcaption: 'title',
                    copyAttrs: '^class$',
                    classes: 'in-text-img',
                });
            },
        },
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
                    items: [
                        {
                            text: 'High level overview',
                            link: '/proof_of_existence/high_level_overview'
                        }
                    ]
                },
                {
                    text: 'Plastic Credits',
                    collapsed: true,
                    items: [
                        {
                            text: 'High level overview',
                            link: '/plastic_credits/high_level_overview'
                        }
                    ],
                },
                {
                    text: 'Developers',
                    collapsed: true,
                    items: [
                        {
                            text: 'Why build on EmpowerChain?',
                            link: '/developers/why-build-on-empowerchain'
                        },
                        {
                            text: 'What to build',
                            link: '/developers/what-to-build-on-empowerchain'
                        },
                        {
                            text: 'Ways to build',
                            link: '/developers/ways-to-build-on-empowerchain'
                        },
                        {
                            text: 'Architecture',
                            link: '/developers/architecture'
                        },
                        {
                            text: 'Plastic Credits',
                            link: '/developers/plastic-credits'
                        }
                    ]
                },
                {
                    text: 'Validators',
                    collapsed: true,
                    items: [
                        {
                            text: 'Full Node Setup',
                            link: '/validators/full-node-setup'
                        },
                        {
                            text: 'Validator Setup',
                            link: '/validators/validator-setup'
                        },
                        {
                            text: 'Cosmovisor Setup',
                            link: '/validators/cosmovisor-setup'
                        }
                    ]
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