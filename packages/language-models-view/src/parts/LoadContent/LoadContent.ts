import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const loadContent = async (state: LanguageModelsState): Promise<LanguageModelsState> => {
  return {
    ...state,
  }
}
