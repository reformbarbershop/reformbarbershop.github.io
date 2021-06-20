module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/comment-directive': 'off',
    'vue/require-component-is': 'off',
    'arrow-parens': 'off',
    'space-before-function-paren': 'off',
    'no-new': 'off',
    camelcase: 'off'
  }
}
