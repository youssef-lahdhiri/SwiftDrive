import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      "@typescript-eslint/no-explicit-any": "off",
      "@next/next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  }),
]

export default eslintConfig;
