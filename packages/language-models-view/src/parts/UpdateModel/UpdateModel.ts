import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as CacheStorage from '../CacheStorage/CacheStorage.ts'

const isEnabled = (model: any): boolean => model.enabled

const getModelId = (model: any): string => model.id

export const updateModel = async (state: LanguageModelsState, modelId: string, enabled: boolean): Promise<LanguageModelsState> => {
  const { cacheKey, cacheName, models } = state
  const updatedModels = models.map((model) => {
    if (model.id === modelId) {
      return { ...model, enabled }
    }
    return model
  })

  // Get all disabled models
  const disabledModels = updatedModels.filter((model) => !isEnabled(model)).map(getModelId)

  // Save to cache
  await CacheStorage.saveDisabledModels(disabledModels, cacheName, cacheKey)

  return {
    ...state,
    models: updatedModels,
  }
}
