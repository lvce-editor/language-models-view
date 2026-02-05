import { InputSource } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const handleClearClick = (state: LanguageModelsState): LanguageModelsState => {
  return {
    ...state,
    filteredModels: state.models,
    filterValue: '',
    focused: 'input',
    inputSource: InputSource.Script,
  }
}
