import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,      // для Node.js
        ...globals.browser,   // якщо потрібен браузер
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];


// import js from "@eslint/js";

// export default [
//   js.configs.recommended,
//   {
//     rules: {
//       "no-unused-vars": "warn",
//       "no-console": "off",
//     },
//   },
// ];
