import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const disableModel = (state: LanguageModelsState, modelId: string): LanguageModelsState => {
  const updatedModels = state.models.map((model) => {
    if (model.id === modelId) {
      return { ...model, enabled: false }
    }
    return model
  })

  return {
    ...state,
    models: updatedModels,
  }
}
