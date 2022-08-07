// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hio海鸥',
  tagline: '人活着就是为了整点薯条。',
  url: 'https://www.hio.bio',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pjonix', // Usually your GitHub org/user name.
  projectName: 'docusaurus-starter', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        Reflection: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pjonix/hio-voice/tree/main/packages/create-docusaurus/templates/shared/',
          path: 'Reflection',
          remarkPlugins: [math],
          rehypePlugins: [katex],},
        Ramblings: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pjonix/hio-voice/tree/main/packages/create-docusaurus/templates/shared/',
          path: 'Ramblings',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        Basics: {
          sidebarPath: require.resolve('./sidebars.js'),
          showReadingTime: true,
          editUrl:
            'https://github.com/pjonix/hio-voice/tree/main/packages/create-docusaurus/templates/shared/',
          path: 'Basics',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        Calculus: {
          sidebarPath: require.resolve('./sidebars.js'),
          showReadingTime: true,
          editUrl:
            'https://github.com/pjonix/hio-voice/tree/main/packages/create-docusaurus/templates/shared/',
          path: 'Calculus',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        Algebra: {
          sidebarPath: require.resolve('./sidebars.js'),
          showReadingTime: true,
          editUrl:
            'https://github.com/pjonix/hio-voice/tree/main/packages/create-docusaurus/templates/shared/',
          path: 'Algebra',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),},
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hio海鸥',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'Basics', label: 'Basics', position: 'left'},
          {type: 'Calculus', label: 'Calculus', position: 'left'},
          {type: 'Algebra', label: 'Algebra', position: 'left'},
          {type: 'Reflection',docId:'intro',label: 'Reflection',position: 'left'},
          {type: 'Ramblings', label: 'Ramblings', position: 'left'},
          {
            href: 'https://github.com/pjonix/hio-voice/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com',
              },
              {
                label: 'AoPS Wiki',
                href: 'https://artofproblemsolving.com/wiki/index.php?title=Main_Page',
              },
              {
                label: 'Netlify',
                href: 'https://app.netlify.com',
              },
            ],
          },
          {
            title: 'Categories',
            items: [
              {
                label: 'Ramblings',
                to:'/Ramblings',
              },
              {
                label: 'Reflection',
                to:'/Reflection',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hio.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;


