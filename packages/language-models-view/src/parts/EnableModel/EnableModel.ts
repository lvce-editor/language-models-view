import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const enableModel = ({ models, ...state }: LanguageModelsState, modelId: string): LanguageModelsState => {
  const updatedModels = models.map(({ id, ...rest }) => {
    if (id === modelId) {
      return { ...rest, id, enabled: true }
    }
    return { ...rest, id }
  })

  return {
    ...state,
    models: updatedModels,
  }
}
