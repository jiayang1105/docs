export const sidebar = {
  git: [
    {
      text: "Git 相关参考",
      link: "/docs/git/helper",
      collapsible: true,
      children: ["/docs/git/command"],
    },
  ],
  utils: ["/docs/utils/date", "/docs/utils/regexp"],
  interview: [
    "/interview/css",
    "/interview/es6",
    "/interview/js",
    "/interview/ts",
    {
      text: "Node js",
      link: "/interview/node",
      collapsible: true,
      children: ["/interview/node","/interview/vue2"],
    },
    "/interview/vue2",
    "/interview/vue3",
    "/interview/webpack",
  ],
};
