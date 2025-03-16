module.exports = {
    root: true,
    extends: ["next/core-web-vitals", "eslint:recommended", "plugin:@typescript-eslint/recommended", "expo", "prettier","react-native"],
    ignorePatterns: ["/dist/*"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Suppress unused variables errors
      "@next/next/no-img-element": "off", // Allow <img> instead of next/image
      "react-hooks/exhaustive-deps": "warn", // Change missing deps error to warning
      "react/no-unescaped-entities": "off", // Allow unescaped characters like single quotes
    },
  };
