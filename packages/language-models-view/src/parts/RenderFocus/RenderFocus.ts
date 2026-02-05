import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const renderFocus = (oldState: LanguageModelsState, newState: LanguageModelsState): any => {
  if (newState.focused === 'none') {
    return []
  }
  const elementName = newState.focused === 'input' ? 'LanguageModelsFilter' : 'LanguageModelsTable'
  return [ViewletCommand.FocusElementByName, newState.uid, elementName]
}
