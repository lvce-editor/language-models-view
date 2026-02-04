import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const disableModel = ({ models, ...rest }: LanguageModelsState, modelId: string): LanguageModelsState => {
  const updatedModels = models.map(({ id, ...modelRest }) => {
    if (id === modelId) {
      return { id, ...modelRest, enabled: false }
    }
    return { id, ...modelRest }
  })

  return {
    ...rest,
    models: updatedModels,
  }
}
