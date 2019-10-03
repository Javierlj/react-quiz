module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest": true
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }]
  },
};
