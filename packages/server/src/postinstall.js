import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const __dirname = import.meta.dirname

const root = join(__dirname, '..', '..', '..')

export const getRemoteUrl = (path) => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const nodeModulesPath = join(root, 'node_modules')

const workerPath = join(root, '.tmp', 'dist', 'dist', 'languageModelsViewMain.js')

const serverStaticPath = join(nodeModulesPath, '@lvce-editor', 'static-server', 'static')

const RE_COMMIT_HASH = /^[a-z\d]+$/
const isCommitHash = (dirent) => {
  return dirent.length === 7 && dirent.match(RE_COMMIT_HASH)
}

const dirents = await readdir(serverStaticPath)
const commitHash = dirents.find(isCommitHash) || ''
const rendererWorkerMainPath = join(serverStaticPath, commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

const remoteUrl = getRemoteUrl(workerPath)

const replace = async (path, occurrence, replacement) => {
  const content = await readFile(path, 'utf8')
  if (content.includes(replacement)) {
    return
  }
  if (!content.includes(occurrence)) {
    throw new Error(`Could not find expected language models worker URL in ${path}`)
  }
  await writeFile(path, content.replace(occurrence, replacement))
}

await replace(
  rendererWorkerMainPath,
  '`${assetDir}/packages/renderer-worker/node_modules/@lvce-editor/language-models-view/dist/languageModelsViewMain.js`',
  `\`${remoteUrl}\``,
)
await replace(
  join(serverStaticPath, 'index.html'),
  `"develop.languageModelsViewPath": "/${commitHash}/packages/language-models-view/dist/languageModelsViewMain.js"`,
  `"develop.languageModelsViewPath": "${remoteUrl}"`,
)
