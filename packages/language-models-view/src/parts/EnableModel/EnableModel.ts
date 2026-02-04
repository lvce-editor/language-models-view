import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const enableModel = (state: LanguageModelsState, modelId: string): LanguageModelsState => {
  const updatedModels = state.models.map((model) => {
    if (model.id === modelId) {
      return { ...model, enabled: true }
    }
    return model
  })

  return {
    ...state,
    models: updatedModels,
  }
}
