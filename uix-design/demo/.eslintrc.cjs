module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: { ecmaVersion: 2020, sourceType: "module", ecmaFeatures: { jsx: true } },
  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  ignorePatterns: ["dist", "node_modules"],
  rules: {
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
  },
  overrides: [
    {
      files: ["**/*.jsx"],
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  ],
};
