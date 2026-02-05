import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const diffCss = (oldState: LanguageModelsState, newState: LanguageModelsState): boolean => {
  return oldState.headerHeight === newState.headerHeight && oldState.rowHeight === newState.rowHeight
}
