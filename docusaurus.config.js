const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Tech Doc',
  tagline: 'tech_doc',
  url: ' https://lichtvoneinzbern.github.io',
  baseUrl: '/techart_document/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tech Doc',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'はじめに',
          },
          // {to: '/blog', label: 'ブログ', position: 'left'},
          {
            href: 'https://lichtvoneinzbern.github.io/profile/',
            label: 'プロフィール（英語）',
            position: 'right',
          },
          {
            href: 'https://x.com/EldL1cht',
            label: 'X(Twitter)',
            position: 'right',
          },
          {
            href: 'https://github.com/lichtvoneinzbern',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'はじめに',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'SNS',
            items: [
              {
                label: 'X (Twitter)',
                href: 'https://x.com/EldL1cht',
              },
              {
                label: 'Creatir Hub (Discord 情報共有サーバー)',
                href: 'https://discord.gg/4TK8Av7S',
              },
              {
                label: 'Discordでフレンドに追加',
                href: 'https://discord.gg/kdj4WhPK',
              },

            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'プロフィール（英語）',
                href: 'https://lichtvoneinzbern.github.io/profile/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
