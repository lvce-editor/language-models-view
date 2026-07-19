import { InputSource } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const handleClearClick = (state: LanguageModelsState): LanguageModelsState => {
  const { models } = state
  return {
    ...state,
    filteredModels: models,
    filterValue: '',
    focused: 'input',
    inputSource: InputSource.Script,
  }
}
