import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 440_000

export const instantiations = 170000

export const instantiationsPath = join(root, 'packages', 'language-models-view')

export const workerPath = join(root, '.tmp/dist/dist/languageModelsViewMain.js')

export const playwrightPath = new URL('../../e2e/node_modules/playwright/index.mjs', import.meta.url).toString()
