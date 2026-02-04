import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const renderItems = (oldState: LanguageModelsState, newState: LanguageModelsState): any => {
  return [ViewletCommand.SetDom2, newState.uid, []]
}
