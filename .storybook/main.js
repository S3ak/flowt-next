module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../features/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
