import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import compatPlugin from "eslint-plugin-compat";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, compat: compatPlugin },
    extends: ["js/recommended", prettierConfig],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "script",
    },
    rules: {
      "compat/compat": "warn",
    },
  },
]);
