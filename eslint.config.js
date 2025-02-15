import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parserTypeScript from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{ts,tsx}"], // Define os arquivos TypeScript a serem analisados
    parser: parserTypeScript, // Definindo o parser para TypeScript diretamente
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "semi": ["error", "always"], // Força o uso de ponto e vírgula
      "quotes": ["error", "single"], // Força o uso de aspas simples
      ...pluginJs.configs.recommended.rules, // Regras do ESLint para JavaScript
      ...pluginReact.configs.flat.recommended.rules, // Regras do ESLint para React
      ...tseslint.configs.recommended.rules, // Regras do ESLint para TypeScript
    },
  },
];
