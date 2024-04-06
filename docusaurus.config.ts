import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Carleton Blueprint",
  tagline: "Tech for social good 🌎",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://cublueprint.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // env vars
  // https://docusaurus.io/docs/deployment#using-environment-variables
  customFields: {
    CONTENTFUL_SPACE_ID: "7m5nzpb6x3ap",
    CONTENTFUL_ACCESS_TOKEN: "5MxQQuq-Nt3HCxyXGRbERXBwkTzB2PXOo4HLyWOZhz4",
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Carleton-Blueprint", // Usually your GitHub org/user name.
  projectName: "blueprint-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Carleton-Blueprint/blueprint-docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Carleton-Blueprint/blueprint-docs/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/blueprint-social-card.png",
    navbar: {
      title: "Blueprint",
      logo: {
        alt: "Blueprint logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Events", position: "left" },
        {
          href: "https://github.com/Carleton-Blueprint",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About Us",
          items: [
            {
              label: "carletonblueprint.org",
              to: "https://carletonblueprint.org",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkTree",
              href: "https://linktr.ee/cublueprint",
            },
            {
              label: "Instagram",
              href: "https://tr.ee/pnM2Q4F_uq",
            },
            {
              label: "Discord",
              href: "https://tr.ee/PginhINpfv",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Events",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Carleton-Blueprint",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carleton Blueprint`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
