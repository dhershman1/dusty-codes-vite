import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import standard from '@vue/eslint-config-standard'
import globals from 'globals'

export default [
  {
    ignores: ['index.html', 'dist/**']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...standard,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2015,
        $t: 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
