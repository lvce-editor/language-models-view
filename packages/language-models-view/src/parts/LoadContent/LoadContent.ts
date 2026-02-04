import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as CacheStorage from '../CacheStorage/CacheStorage.ts'
import { getModels } from '../GetModels/GetModels.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: LanguageModelsState, savedState?: unknown): Promise<LanguageModelsState> => {
  const models = await getModels()
  
  // Load disabled models from cache
  const disabledModelIds = await CacheStorage.getDisabledModels()
  
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
  }

  return newState
}
