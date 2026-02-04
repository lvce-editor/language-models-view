import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: LanguageModelsState): SavedState => {
  const { models } = state
  return {
    models,
  }
}
