import {defineConfig} from "vitepress";
import {withMermaid} from "vitepress-plugin-mermaid";
import imageFigures from 'markdown-it-image-figures';

import cliDocs from './sidebar-cli-docs.js'
import moduleDocs from './sidebar-module-docs.js'

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
          text: 'Incentivized Testnet',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/testnet/overview'
            },
            {
              text: 'Testnet rules',
              link: '/testnet/rules'
            },
            {
              text: 'Tasks and rewards',
              link: '/testnet/tasks-and-rewards'
            },
            {
              text: 'Build challenges',
              link: '/testnet/build-challenges'
            }
          ],
        },
        {
          text: 'Governance',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/governance/overview'
            }
          ]
        },
        {
          text: 'Core modules',
          collapsed: true,
          items: [
            {
              text: 'Proof of Existence',
              collapsed: true,
              items: [
                {
                  text: 'High level overview',
                  link: '/proof-of-existence/high-level-overview'
                }
              ]
            },
            {
              text: 'Plastic Credits',
              collapsed: true,
              items: [
                {
                  text: 'High level overview',
                  link: '/plastic-credits/high-level-overview'
                }
              ],
            },
            {
              text: 'Deposit schemes',
              collapsed: true,
              items: [
                {
                  text: 'High level overview',
                  link: '/deposit-schemes/high-level-overview'
                }
              ]
            },
          ]
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
              text: 'Validators in the Interchain',
              link: '/validators/intro'
            },
            {
              text: 'Full node setup',
              link: '/validators/full-node-setup'
            },
            {
              text: 'Validator setup',
              link: '/validators/validator-setup'
            },
            {
              text: 'Cosmovisor setup',
              link: '/validators/cosmovisor-setup'
            },
            {
              text: 'Delegation program',
              link: '/validators/delegation-program'
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
              items: moduleDocs
            },
          ].concat(cliDocs.concat([
            {
              text: 'API docs',
              link: '/api-docs/swagger'
            },
          ]))
        },
        {
          text: 'Misc',
          collapsed: true,
          items: [
            {
              text: 'Brand assets',
              link: '/misc/brand-assets'
            }
          ]
        }
      ]
    },
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
  })
);