import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'

export default [
  ...config.default,
  ...config.recommendedVirtualDom,
  ...actions.default,
  {
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@cspell/spellchecker': ['off'],
    },
  },
  {
    files: ['packages/language-models-view/test/**/*.ts'],
    rules: {
      'virtual-dom/prefer-merge-class-names': 'off',
      'virtual-dom/prefer-state-destructuring': 'off',
    },
  },
]
