import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as CacheStorage from '../CacheStorage/CacheStorage.ts'
import { getFilteredModels } from '../GetFilteredModels/GetFilteredModels.ts'
import { getModels } from '../GetModels/GetModels.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: LanguageModelsState, savedState?: unknown): Promise<LanguageModelsState> => {
  const models = await getModels()

  // Load disabled models from cache
  const disabledModelIds = await CacheStorage.getDisabledModels(state.cacheName, state.cacheKey)

  // Apply cached disabled state to models
  const modelsWithCachedState = models.map((model) => ({
    ...model,
    enabled: !disabledModelIds.includes(model.id),
  }))

  let newState: LanguageModelsState = {
    ...state,
    filteredModels: modelsWithCachedState,
    initial: false,
    models: modelsWithCachedState,
  }

  if (savedState) {
    newState = restoreState(newState, savedState)
    // If a filter value was restored, apply filtering to the models
    if (newState.filterValue) {
      newState = {
        ...newState,
        filteredModels: getFilteredModels(newState.models, newState.filterValue),
      }
    }
  }

  return newState
}
