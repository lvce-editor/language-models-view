import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as CacheStorage from '../CacheStorage/CacheStorage.ts'

export const updateModel = async ({ models, ...rest }: LanguageModelsState, modelId: string, enabled: boolean): Promise<LanguageModelsState> => {
  const updatedModels = models.map((model) => {
    if (model.id === modelId) {
      return { ...model, enabled }
    }
    return model
  })

  // Get all disabled models
  const disabledModels = updatedModels.filter((model) => !model.enabled).map((model) => model.id)

  // Save to cache
  await CacheStorage.saveDisabledModels(disabledModels)

  return {
    ...rest,
    models: updatedModels,
  }
}
