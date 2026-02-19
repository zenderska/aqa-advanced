import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    ignores: ["coverage/**"]
  },

  {
    languageOptions: {
      globals: {
        // Node globals
        console: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        fetch: "readonly",

        // Browser globals (для coverage html)
        window: "readonly",
        document: "readonly",

        // Jest globals
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly"
      }
    }
  }
];