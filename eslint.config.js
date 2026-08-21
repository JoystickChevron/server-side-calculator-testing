const playwright = require("eslint-plugin-playwright");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
  {
    ignores: ["node_modules/", "playwright-report/", "test-results/"],
  },

  {
    files: ["tests/**/*.spec.{js,ts}", "tests/**/*.test.{js,ts}"],
    ...playwright.configs["flat/recommended"],
    rules: {
      "playwright/no-focused-test": "error",
    },
  },

  // 3. Prettier Formatting Integration
  eslintPluginPrettierRecommended,
];
