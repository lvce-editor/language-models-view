import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const diffFilterValue = (oldState: LanguageModelsState, newState: LanguageModelsState): boolean => {
  return oldState.filterValue === newState.filterValue
}
