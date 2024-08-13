module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "import"],
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": "off",
    "react/jsx-fragments": ["warn", "element"],
    "react/jsx-curly-brace-presence": [
      "warn",
      {
        children: "ignore",
        propElementValues: "always",
        props: "always",
      },
    ],
    "no-var": "error",
    "prefer-const": "warn",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],

    //  "import/no-unresolved": "error",
    "import/order": ["warn", { groups: [["builtin", "external", "internal"]] }],
    "react/jsx-no-duplicate-props": "error",
    "react/no-array-index-key": "warn",
    "react/jsx-key": "error",
    "react/no-danger": "warn",
    "react/jsx-max-props-per-line": ["warn", { maximum: 5 }],
    "react/jsx-sort-props": ["warn", { callbacksLast: true, shorthandFirst: true }],
  },
}
