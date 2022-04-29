import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { head } from "./config/head";
import { navbar } from "./config/navbar";
import { sidebar } from "./config/sidebar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Docs",
  description: "Docs - The 渐进式学习文档",
  base: "/docs/",
  head,
  theme: defaultTheme({
    repo: "jiayang1105/docs",
    docsBranch: "dev",
    docsDir: "src",

    editLinks: true,
    lastUpdated: true,
    editLinkText: "在 GitHub 上编辑此页",

    navbar,
    sidebarDepth: 2,
    sidebar: {
      "/docs/git/": sidebar.git,
      "/docs/utils/": sidebar.utils,
      "/interview/": sidebar.interview,
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
    }),
  ],
});
