import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const handleBlur = (state: LanguageModelsState): LanguageModelsState => {
  return {
    ...state,
    focused: false,
  }
}
