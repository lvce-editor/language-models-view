import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const loadContent = async (state: LanguageModelsState): Promise<LanguageModelsState> => {
  return {
    ...state,
    initial: false,
    models: [], // TODO get them from somewhere
  }
}
