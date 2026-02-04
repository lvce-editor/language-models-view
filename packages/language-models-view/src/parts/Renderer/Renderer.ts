import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export interface Renderer {
  (oldState: LanguageModelsState, newState: LanguageModelsState): readonly any[]
}
