// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Doc',
  tagline: 'tech_doc',
  url: ' https://lichtvoneinzbern.github.io',
  baseUrl: '/techart_document/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require("mdx-mermaid")],
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./static/docs-custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["ja", "en"],
        docsRouteBasePath: "/",
        docsDir: "docs",
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tech Doc',
        logo: {
          alt: 'techart_document',
          src: 'img/docusaurus.svg',
        },
        items: [
          {
            href: 'https://github.com/lichtvoneinzbern',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://x.com/EldL1cht',
            label: 'X(Twitter)',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
