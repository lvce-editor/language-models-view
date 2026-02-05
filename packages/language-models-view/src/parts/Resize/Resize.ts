import type { Dimensions } from '../Dimensions/Dimensions.ts'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const resize = (state: LanguageModelsState, dimensions: Dimensions): LanguageModelsState => {
  return {
    ...state,
    width: dimensions.width,
    x: dimensions.x,
    y: dimensions.y,
  }
}
