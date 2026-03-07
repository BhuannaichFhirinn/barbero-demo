module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'vuetify',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'semi': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'arrow-body-style': ['error', 'always'],
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'multi-line'],
    'object-curly-spacing': ['error', 'always'],
    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off'
  },
  settings: {
    'vue/setup-compiler-macros': true,
  },
}
