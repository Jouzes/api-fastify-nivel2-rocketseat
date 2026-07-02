import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["build", "node_modules"],
  },
  {
    files: ["**/*.{js,ts}"],
    plugins: {
      "@stylistic": stylistic,
    },
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      "@stylistic/indent": ["warn", 2],
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/comma-dangle": ["warn", "always-multiline"],
      "@stylistic/object-curly-spacing": ["warn", "always"],
      "@stylistic/space-before-function-paren": ["warn", "never"],
      "@stylistic/eol-last": ["warn", "always"],
    },
  },
);
