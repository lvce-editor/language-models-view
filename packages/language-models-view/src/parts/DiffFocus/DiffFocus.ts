import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const diffFocus = (oldState: LanguageModelsState, newState: LanguageModelsState): boolean => {
  return oldState.focused === newState.focused
}
