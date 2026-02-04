import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const isEqual = (oldState: LanguageModelsState, newState: LanguageModelsState): boolean => {
  return oldState.models === newState.models && oldState.filteredModels === newState.filteredModels
}
