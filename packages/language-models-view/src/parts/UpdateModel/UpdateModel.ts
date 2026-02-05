import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as CacheStorage from '../CacheStorage/CacheStorage.ts'
import { getDisabledModelIds } from '../GetDisabledModelIds/GetDisabledModelIds.ts'

export const updateModel = async (state: LanguageModelsState, modelId: string, enabled: boolean): Promise<LanguageModelsState> => {
  const { cacheKey, cacheName, filteredModels, models } = state
  const updatedModels = models.map((model) => {
    if (model.id === modelId) {
      return { ...model, enabled }
    }
    return model
  })

  const updatedFilteredModels = filteredModels.map((model) => {
    if (model.id === modelId) {
      return { ...model, enabled }
    }
    return model
  })

  // Get all disabled models
  const disabledModels = getDisabledModelIds(updatedModels)

  // Save to cache
  await CacheStorage.saveDisabledModels(disabledModels, cacheName, cacheKey)

  return {
    ...state,
    filteredModels: updatedFilteredModels,
    models: updatedModels,
  }
}
