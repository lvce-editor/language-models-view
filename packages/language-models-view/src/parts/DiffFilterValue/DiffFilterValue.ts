import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const diffFilterValue = (oldState: LanguageModelsState, newState: LanguageModelsState): boolean => {
  // Only check filterValue if input source is script (2)
  // If input source is user (1), we don't need to rerender the input
  if (newState.inputSource === 1) {
    return true
  }
  return oldState.filterValue === newState.filterValue
}
