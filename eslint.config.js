import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: [
      "src/**/*{.js,.cjs,.mjs,.ts,.d.ts}",
    ],
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "cache/",
      "logs/",
      "docs/",
      ".vscode/",
      ".git/",
      ".github/",
      "README.md",
      "Dockerfile",
      "tsconfig.json",
      "package.json",
      "package-lock.json",
      ".dockerignore",
      ".gitignore",
      ".env.development",
      ".env.production",
      ".env",
      ".DS_Store",
    ],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
        },
      ],
    },
  },
];
