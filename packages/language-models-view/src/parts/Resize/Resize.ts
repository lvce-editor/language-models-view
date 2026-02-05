import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import type { Dimensions } from '../Dimensions/Dimensions.ts'

export const resize = (state: LanguageModelsState, dimensions: Dimensions): LanguageModelsState => {
  return {
    ...state,
    width: dimensions.width,
    x: dimensions.x,
    y: dimensions.y,
  }
}
