import { ViewletCommand } from '@lvce-editor/constants'
import { diffTree } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { renderItems } from '../RenderItems/RenderItems.ts'

export const renderIncremental = (oldState: LanguageModelsState, newState: LanguageModelsState): any => {
  const oldDom = renderItems(oldState, oldState)[2]
  const newDom = renderItems(newState, newState)[2]
  const patches = diffTree(oldDom, newDom)
  console.log({ patches })
  return [ViewletCommand.SetPatches, newState.uid, patches]
}
