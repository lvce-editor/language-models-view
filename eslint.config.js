import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'

export default [
  ...config.default,
  ...actions.default,
  {
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@cspell/spellchecker': ['off'],
    },
  },
]
