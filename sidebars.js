/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  customSidebar: [
    {
        type: "category",
        label: "Overview",
        items: [
          "README",
          "testnet-guide",
          "faq",
          "glossary",
          "community-resources"
        ],
    },
    {
        type: "category",
        label: "Governance",
        items: [
          "ungovernance/governance-minimization-guide"
        ],
    },
    {
        type: "category",
        label: "Risks",
        items: [
          "risk/geb-risks",
          "risk/pid-failure-modes-and-responses"
        ],
    },
    {
      type: "category",
      label: "Developers",
      items: [
        {
            type: "category",
            label: "Contract Variables Translation",
            items: [
              "contract-translation/naming-transition",
              "contract-translation/governance-contracts-naming-transition",
              // "contract-translation/safe-management-contract-naming-transition",
            ],
          },
          {
            type: "category",
            label: "System Contracts",
            items: [
              {
                type: "category",
                label: "Core Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/core/README",
                },
                items: [
                  "system-contracts/core/safe-engine",
                  "system-contracts/core/liquidation-engine",
                  "system-contracts/core/accounting-engine",
                ],
              },
              {
                type: "category",
                label: "Auction Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/auction-module/README",
                },
                items: [
                  "system-contracts/auction-module/english-collateral-auction-house",
                  "system-contracts/auction-module/fixed-discount-collateral-auction-house",
                  "system-contracts/auction-module/increasing-discount-collateral-auction-house",
                  "system-contracts/auction-module/debt-auction-house",
                  "system-contracts/auction-module/surplus-auction-house",
                ],
              },
              {
                type: "category",
                label: "Oracle Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/oracle-module/README",
                },
                items: [
                  "system-contracts/oracle-module/oracle-relayer",
                  {
                    type: "category",
                    label: "Medianizer",
                    collapsible: true,
                    collapsed: true,
                    link: {
                      type: "doc",
                      id: "system-contracts/oracle-module/medianizer/README",
                    },
                    items: [
                      "system-contracts/oracle-module/medianizer/ds-value",
                      "system-contracts/oracle-module/medianizer/governance-led-median",
                      "system-contracts/oracle-module/medianizer/chainlink-median",
                      "system-contracts/oracle-module/medianizer/uniswap-v2-median",
                    ],
                  },
                  {
                    type: "category",
                    label: "FSM",
                    collapsible: true,
                    collapsed: true,
                    link: {
                      type: "doc",
                      id: "system-contracts/oracle-module/fsm/README",
                    },
                    items: [
                      "system-contracts/oracle-module/fsm/oracle-security-module",
                      "system-contracts/oracle-module/fsm/dampened-security-module",
                      "system-contracts/oracle-module/fsm/fsm-governance-interface",
                    ],
                  },
                ],
              },
              {
                type: "category",
                label: "Token Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/token-module/README",
                },
                items: [
                  "system-contracts/token-module/token-adapters",
                  "system-contracts/token-module/system-coin",
                  "system-contracts/token-module/protocol-token",
                  "system-contracts/token-module/protocol-token-authority",
                  "system-contracts/token-module/protocol-token-printing-permissions",
                ],
              },

              {
                type: "category",
                label: "Money Market Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/money-market-module/README",
                },
                items: ["system-contracts/money-market-module/tax-collector"],
              },
              {
                type: "category",
                label: "Sustainability Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/sustainability-module/README",
                },
                items: [
                  "system-contracts/sustainability-module/stability-fee-treasury",
                  "system-contracts/sustainability-module/fsm-wrapper",
                  "system-contracts/sustainability-module/increasing-treasury-reimbursement",
                  "system-contracts/sustainability-module/mandatory-fixed-treasury-reimbursement",
                  "system-contracts/sustainability-module/increasing-reward-relayer",
                ],
              },
              {
                type: "category",
                label: "Automation Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/automation-module/README",
                },
                items: [
                  "system-contracts/automation-module/collateral-auction-throttler",
                  "system-contracts/automation-module/single-spot-debt-ceiling-setter",
                  "system-contracts/automation-module/esm-threshold-setter",
                ],
              },
              {
                type: "category",
                label: "Governance Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/governance-module/README",
                },
                items: ["system-contracts/governance-module/ds-pause"],
              },
              {
                type: "category",
                label: "Shutdown Module",
                collapsible: true,
                collapsed: true,
                link: {
                  type: "doc",
                  id: "system-contracts/shutdown-module/README",
                },
                items: [
                  "system-contracts/shutdown-module/global-settlement",
                  "system-contracts/shutdown-module/esm",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Proxy Infrastructure",
            items: [
              "proxy-infrastructure/od-proxy",
              "proxy-infrastructure/vault721",
            ],
          },
          {
            type: "category",
            label: "Helper Contracts",
            items: ["helper-contracts/safe-manager"],
          },
          {
            type: "category",
            label: "GEB.js",
            items: [
              "geb-js/getting-started",
              "geb-js/geb-js-global-settlement-guide",
              {
                type: "category",
                label: "API Reference",
                collapsible: true,
                collapsed: true,
                link: { type: "doc", id: "geb-js/api-reference/README" },
                items: [
                  "geb-js/api-reference/geb",
                  "geb-js/api-reference/safe",
                  "geb-js/api-reference/gebproxyactions",
                  "geb-js/api-reference/gebadmin",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "APIs",
            items: ["api/api-endpoints"],
          },
          {
            type: "category",
            label: "Pyflex",
            items: [
              {
                type: "category",
                label: "Getting Started",
                link: { type: "doc", id: "pyflex/getting-started/README" },
                collapsible: true,
                collapsed: true,
                items: [
                  "pyflex/getting-started/configuration",
                  "pyflex/getting-started/basics",
                ],
              },
              {
                type: "category",
                label: "SAFE Management",
                link: { type: "doc", id: "pyflex/safe-management/README" },
                collapsible: true,
                collapsed: true,
                items: [
                  "pyflex/safe-management/opening-a-safe",
                  "pyflex/safe-management/closing-a-safe",
                ],
              },
              "pyflex/numerics",
            ],
          },
          {
            type: "category",
            label: "Keepers",
            items: [
              "keepers/overview",
              {
                type: "category",
                label: "Collateral Auction Keeper",
                link: { type: "doc", id: "keepers/collateral-auction-keeper/README" },
                collapsible: true,
                collapsed: true,
                items: [
                  "keepers/collateral-auction-keeper/running-in-docker",
                  "keepers/collateral-auction-keeper/running-on-a-host",
                  "keepers/collateral-auction-keeper/liquidations",
                  "keepers/collateral-auction-keeper/flash-swaps",
                ],
              },
              {
                type: "category",
                label: "Debt Auction Keeper",
                link: { type: "doc", id: "keepers/debt-auction-keeper/README" },
                collapsible: true,
                collapsed: true,
                items: [
                  "keepers/debt-auction-keeper/running-in-docker",
                  "keepers/debt-auction-keeper/running-on-a-host",
                ],
              },
              {
                type: "category",
                label: "Staked Token Auction Keeper",
                link: {
                  type: "doc",
                  id: "keepers/staked-token-auction-keeper/README",
                },
                collapsible: true,
                collapsed: true,
                items: [
                  "keepers/staked-token-auction-keeper/running-in-docker",
                  "keepers/staked-token-auction-keeper/running-on-a-host",
                ],
              },
              {
                type: "category",
                label: "Surplus Auction Keeper",
                link: { type: "doc", id: "keepers/surplus-auction-keeper/README" },
                collapsible: true,
                collapsed: true,
                items: [
                  "keepers/surplus-auction-keeper/running-in-docker",
                  "keepers/surplus-auction-keeper/running-on-a-host",
                ],
              },
              "keepers/bidding-models",
            ],
          },
          {
            type: "category",
            label: "Liquidation Protection",
            items: [
              "liquidation-protection/safe-protection",
              "liquidation-protection/liquidation-protection-guide",
              "liquidation-protection/uni-v2-rai-eth-savior-details",
              "liquidation-protection/curve-v1-savior-details",
            ],
          },
      ]
    }
  ],

  //Forked RAI sidebar. TODO: delete the below when all files are included in current sidebar.
  // customSidebar: [
  //   "README",
  //   "community-resources",
  //   "flx-mechanics",
  //   "faq",
  //   {
  //     type: "category",
  //     label: "RAI",
  //     items: [
  //       "rai/rai-use-cases",
  //       "rai/multi-chain-rai",
  //       "rai/rai-integrations-and-partners",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "The Money God League",
  //     items: ["the-money-god-league/intro-to-the-league"],
  //   },
  //   {
  //     type: "category",
  //     label: "Ungovernance",
  //     items: ["ungovernance/governance-minimization-guide"],
  //   },
  //   {
  //     type: "category",
  //     label: "Risk",
  //     items: ["risk/geb-risks", "risk/pid-failure-modes-and-responses"],
  //   },
  //   {
  //     type: "category",
  //     label: "Incentives",
  //     items: [
  //       "incentives/rai-mint-+-lp-incentives-program",
  //       "incentives/rai-uniswap-v3-mint-+-lp-incentives-program",
  //       "incentives/flx-staking",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Contract Variables Translation",
  //     items: [
  //       "contract-translation/naming-transition",
  //       "contract-translation/governance-contracts-naming-transition",
  //       // "contract-translation/safe-management-contract-naming-transition",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "System Contracts",
  //     items: [
  //       {
  //         type: "category",
  //         label: "Core Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/core/README",
  //         },
  //         items: [
  //           "system-contracts/core/safe-engine",
  //           "system-contracts/core/liquidation-engine",
  //           "system-contracts/core/accounting-engine",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Auction Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/auction-module/README",
  //         },
  //         items: [
  //           "system-contracts/auction-module/english-collateral-auction-house",
  //           "system-contracts/auction-module/fixed-discount-collateral-auction-house",
  //           "system-contracts/auction-module/increasing-discount-collateral-auction-house",
  //           "system-contracts/auction-module/debt-auction-house",
  //           "system-contracts/auction-module/surplus-auction-house",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Oracle Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/oracle-module/README",
  //         },
  //         items: [
  //           "system-contracts/oracle-module/oracle-relayer",
  //           {
  //             type: "category",
  //             label: "Medianizer",
  //             collapsible: true,
  //             collapsed: true,
  //             link: {
  //               type: "doc",
  //               id: "system-contracts/oracle-module/medianizer/README",
  //             },
  //             items: [
  //               "system-contracts/oracle-module/medianizer/ds-value",
  //               "system-contracts/oracle-module/medianizer/governance-led-median",
  //               "system-contracts/oracle-module/medianizer/chainlink-median",
  //               "system-contracts/oracle-module/medianizer/uniswap-v2-median",
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "FSM",
  //             collapsible: true,
  //             collapsed: true,
  //             link: {
  //               type: "doc",
  //               id: "system-contracts/oracle-module/fsm/README",
  //             },
  //             items: [
  //               "system-contracts/oracle-module/fsm/oracle-security-module",
  //               "system-contracts/oracle-module/fsm/dampened-security-module",
  //               "system-contracts/oracle-module/fsm/fsm-governance-interface",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Token Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/token-module/README",
  //         },
  //         items: [
  //           "system-contracts/token-module/token-adapters",
  //           "system-contracts/token-module/system-coin",
  //           "system-contracts/token-module/protocol-token",
  //           "system-contracts/token-module/protocol-token-authority",
  //           "system-contracts/token-module/protocol-token-printing-permissions",
  //         ],
  //       },
  //
  //       {
  //         type: "category",
  //         label: "Money Market Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/money-market-module/README",
  //         },
  //         items: ["system-contracts/money-market-module/tax-collector"],
  //       },
  //       {
  //         type: "category",
  //         label: "Sustainability Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/sustainability-module/README",
  //         },
  //         items: [
  //           "system-contracts/sustainability-module/stability-fee-treasury",
  //           "system-contracts/sustainability-module/fsm-wrapper",
  //           "system-contracts/sustainability-module/increasing-treasury-reimbursement",
  //           "system-contracts/sustainability-module/mandatory-fixed-treasury-reimbursement",
  //           "system-contracts/sustainability-module/increasing-reward-relayer",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Automation Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/automation-module/README",
  //         },
  //         items: [
  //           "system-contracts/automation-module/collateral-auction-throttler",
  //           "system-contracts/automation-module/single-spot-debt-ceiling-setter",
  //           "system-contracts/automation-module/esm-threshold-setter",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Governance Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/governance-module/README",
  //         },
  //         items: ["system-contracts/governance-module/ds-pause"],
  //       },
  //       {
  //         type: "category",
  //         label: "Shutdown Module",
  //         collapsible: true,
  //         collapsed: true,
  //         link: {
  //           type: "doc",
  //           id: "system-contracts/shutdown-module/README",
  //         },
  //         items: [
  //           "system-contracts/shutdown-module/global-settlement",
  //           "system-contracts/shutdown-module/esm",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Proxy Infrastructure",
  //     items: [
  //       "proxy-infrastructure/od-proxy",
  //       "proxy-infrastructure/vault721",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Helper Contracts",
  //     items: ["helper-contracts/safe-manager"],
  //   },
  //   {
  //     type: "category",
  //     label: "GEB.js",
  //     items: [
  //       "geb-js/getting-started",
  //       "geb-js/geb-js-global-settlement-guide",
  //       {
  //         type: "category",
  //         label: "API Reference",
  //         collapsible: true,
  //         collapsed: true,
  //         link: { type: "doc", id: "geb-js/api-reference/README" },
  //         items: [
  //           "geb-js/api-reference/geb",
  //           "geb-js/api-reference/safe",
  //           "geb-js/api-reference/gebproxyactions",
  //           "geb-js/api-reference/gebadmin",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "APIs",
  //     items: ["api/api-endpoints"],
  //   },
  //   {
  //     type: "category",
  //     label: "Pyflex",
  //     items: [
  //       {
  //         type: "category",
  //         label: "Getting Started",
  //         link: { type: "doc", id: "pyflex/getting-started/README" },
  //         collapsible: true,
  //         collapsed: true,
  //         items: [
  //           "pyflex/getting-started/configuration",
  //           "pyflex/getting-started/basics",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "SAFE Management",
  //         link: { type: "doc", id: "pyflex/safe-management/README" },
  //         collapsible: true,
  //         collapsed: true,
  //         items: [
  //           "pyflex/safe-management/opening-a-safe",
  //           "pyflex/safe-management/closing-a-safe",
  //         ],
  //       },
  //       "pyflex/numerics",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Keepers",
  //     items: [
  //       "keepers/overview",
  //       {
  //         type: "category",
  //         label: "Collateral Auction Keeper",
  //         link: { type: "doc", id: "keepers/collateral-auction-keeper/README" },
  //         collapsible: true,
  //         collapsed: true,
  //         items: [
  //           "keepers/collateral-auction-keeper/running-in-docker",
  //           "keepers/collateral-auction-keeper/running-on-a-host",
  //           "keepers/collateral-auction-keeper/liquidations",
  //           "keepers/collateral-auction-keeper/flash-swaps",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Debt Auction Keeper",
  //         link: { type: "doc", id: "keepers/debt-auction-keeper/README" },
  //         collapsible: true,
  //         collapsed: true,
  //         items: [
  //           "keepers/debt-auction-keeper/running-in-docker",
  //           "keepers/debt-auction-keeper/running-on-a-host",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Staked Token Auction Keeper",
  //         link: {
  //           type: "doc",
  //           id: "keepers/staked-token-auction-keeper/README",
  //         },
  //         collapsible: true,
  //         collapsed: true,
  //         items: [
  //           "keepers/staked-token-auction-keeper/running-in-docker",
  //           "keepers/staked-token-auction-keeper/running-on-a-host",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Surplus Auction Keeper",
  //         link: { type: "doc", id: "keepers/surplus-auction-keeper/README" },
  //         collapsible: true,
  //         collapsed: true,
  //         items: [
  //           "keepers/surplus-auction-keeper/running-in-docker",
  //           "keepers/surplus-auction-keeper/running-on-a-host",
  //         ],
  //       },
  //       "keepers/bidding-models",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Liquidation Protection",
  //     items: [
  //       "liquidation-protection/safe-protection",
  //       "liquidation-protection/liquidation-protection-guide",
  //       "liquidation-protection/uni-v2-rai-eth-savior-details",
  //       "liquidation-protection/curve-v1-savior-details",
  //     ],
  //   },
  // ],
};

module.exports = sidebars;
