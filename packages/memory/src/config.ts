import { createRequire } from 'node:module'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { root } from './root.ts'

export const threshold = 440_000

export const instantiations = 170000

export const instantiationsPath = join(root, 'packages', 'language-models-view')

export const workerPath = join(root, '.tmp/dist/dist/languageModelsViewMain.js')

const e2eRequire = createRequire(new URL('../../e2e/package.json', import.meta.url))

const playwrightPackageUrl = pathToFileURL(e2eRequire.resolve('playwright/package.json'))

export const playwrightPath = new URL('./index.mjs', playwrightPackageUrl).toString()
