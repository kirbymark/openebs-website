/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "OpenEBS Docs",
  tagline: "OpenEBS Docs: Information regarding the latest releases",
  url: "https://gallant-pasteur-5e438c.netlify.app/",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "../static/img/fav.svg",
  organizationName: "mayadata-io", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: "OpenEBS docs logo",
        src: "../static/img/logo.svg",
      },
      items: [],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} The OpenEBS Authors | All rights reserved`,
    },
  },
  customFields: {
    openebsLogo: "/docs/img/openebs-logo.svg",
    githubApiContributors:
      "https://api.github.com/repos/openebs/openebs-docs/contributors?q=contributions&order=desc",
    footbarLinks: {
      gettingStarted: [
        {
          label: "Docs",
          link: "/",
        },
        {
          label: "GitHub",
          link: "https://github.com/openebs/openebs-docs",
          isExternal: true,
        },
        {
          label: "Community",
          link: "https://gallant-pasteur-5e438c.netlify.app/community",
        },
        {
          label: "FAQ",
          link: "https://gallant-pasteur-5e438c.netlify.app/faq",
        },
        {
          label: "Blog",
          link: "https://gallant-pasteur-5e438c.netlify.app/blog",
        },
        {
          label: "Commercial support",
          link: "https://gallant-pasteur-5e438c.netlify.app/commercial-support",
        },
      ],
      contactUs: [
        {
          label: "Email us",
          link: "https://gallant-pasteur-5e438c.netlify.app/email-us",
        },
        {
          label: "Feature request",
          link: "https://gallant-pasteur-5e438c.netlify.app/feature-request",
        },
      ],
      privacyPolicy: {
        label: "Privacy policy",
        link: "https://gallant-pasteur-5e438c.netlify.app/privacy-policy",
      },
    },
    navLinks: [
      {
        label: "Docs",
        link: "/",
      },
      {
        label: "Community",
        link: "https://gallant-pasteur-5e438c.netlify.app/community",
      },
      {
        label: "Commercial support",
        link: "https://gallant-pasteur-5e438c.netlify.app/support",
      },
      {
        label: "Blog",
        link: 'https://gallant-pasteur-5e438c.netlify.app/blog',
      },
    ],
    socials: [
      {
        label: 'GitHub',
        src: '/docs/img/github.svg',
        link: 'https://github.com/openebs/openebs',
        isExternal: true,
      },
      {
        label: 'Slack',
        src: '/docs/img/slack.svg',
        link: 'https://gallant-pasteur-5e438c.netlify.app/community',
        isExternal: false
      }
    ] 
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl:
            "https://github.com/IsAmrish/POC-docs/edit/main/project-docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        include: ["**/*.md", "**/*.mdx"], // Extensions to include.
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("docusaurus-lunr-search"),
  ],
};
