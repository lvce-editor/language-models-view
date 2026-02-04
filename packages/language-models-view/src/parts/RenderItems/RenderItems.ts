import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { getLanguageModelsVirtualDom } from '../GetLanguageModelsVirtualDom/GetLanguageModelsVirtualDom.ts'

export const renderItems = (oldState: LanguageModelsState, newState: LanguageModelsState): any => {
  if (newState.initial) {
    return [ViewletCommand.SetDom2, newState.uid, []]
  }
  const dom = getLanguageModelsVirtualDom(newState.filteredModels)
  return [ViewletCommand.SetDom2, newState.uid, dom]
}
