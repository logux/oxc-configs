import { defineConfig } from 'oxlint'

import loguxOxlintConfig from './lint.js'

export default defineConfig({
  ...loguxOxlintConfig,
  ignorePatterns: ['demo/a.js', 'demo/b.ts']
})
