const globals = require("globals");

module.exports = [
  //For JS files
  {
    ignores: ["coverage/**", "node_modules/**"],
    languageOptions: {
      globals: {
        ...globals.node, 
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "script",
      },
    },
    files: ["**/*.js"],
  },

  //For tests Jest
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "script",
      },
    },
  },
];