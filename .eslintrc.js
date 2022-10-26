module.exports = {
  root: true,
  env: { "es6": true },
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  plugins: [
      "react"
  ],
  extends: ["@react-native-community", "prettier", "plugin:react/jsx-runtime"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "warning",
      {
        endOfLine: "auto",
        singleQuote: "off",
      },
    ],
  },
};
