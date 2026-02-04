import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const renderInputValue = (oldState: LanguageModelsState, newState: LanguageModelsState): any => {
  return [ViewletCommand.SetValueByName, newState.uid, 'LanguageModelsFilter', newState.filterValue]
}
