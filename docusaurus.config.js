// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').Config} */
(module.exports = {
    title: 'Tech Doc',
    tagline: 'tech_doc',
    url: ' https://lichtvoneinzbern.github.io',
    baseUrl: '/techart_document/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    i18n: {
        defaultLocale: 'ja',
        locales: ['ja'],
    },

    stylesheets: [
        {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
        type: 'text/css',
        },
    ],

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
                    className: 'no-border',
                },
                items: [
                    {to: '/docs/category/-maya', label: 'Maya', position: 'left'},
                    {to: '/docs/category/%EF%B8%8F-substance-3d-painter', label: 'Subsntace 3D Painter', position: 'left'},
                    {to: '/docs/category/-photoshop', label: 'Photoshop', position: 'left'},
                    {to: '/docs/category/-unreal-engine', label: 'Unreal Engine', position: 'left'},
                    {to: 'docs/category/-obs-studio', label: 'OBS Studio', position: 'left'},
                    {
                        href: 'https://lichtvoneinzbern.github.io/profile/',
                        label: 'Profile',
                        position: 'right',
                    },
                    {
                        href: 'https://www.foriio.com/L1cht',
                        position: 'right',
                        className: 'header-foriio-link',
                    },

                    {
                        href: 'https://x.com/EldL1cht',
                        position: 'right',
                        className: 'header-x-link',
                    },
                    {
                        href: 'https://github.com/lichtvoneinzbern',
                        position: 'right',
                        className: 'header-github-link',
                    },
                    {
                        type: 'search',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'ページリンク',
                        items: [
                            {
                                label: 'はじめに',
                                to: '/docs/intro/',
                            },
                            {
                                label: '利用規約',
                                to: 'docs/terms_of_service',
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
                        ],
                    },
                    {
                        title: 'その他',
                        items: [
                            {
                                label: '著者プロフィール（英語）',
                                href: 'https://lichtvoneinzbern.github.io/profile/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} L1cht.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },

            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
            // remarkPlugins: [require('remark-math')],
            // rehypePlugins: [require('rehype-katex')],
    }),
});
