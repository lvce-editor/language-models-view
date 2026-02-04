import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: LanguageModelsState): SavedState => {
  const { filterValue, models } = state
  return {
    filterValue,
    models,
  }
}
