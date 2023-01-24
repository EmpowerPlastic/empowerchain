/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
