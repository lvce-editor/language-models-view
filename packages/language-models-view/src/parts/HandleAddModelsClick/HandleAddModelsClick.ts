import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'

export const handleAddModelsClick = (state: LanguageModelsState): LanguageModelsState => {
  // Create a dummy model
  const dummyModel: LanguageModel = {
    capabilities: { tools: false, vision: false },
    enabled: true,
    id: `dummy-model-${Date.now()}`,
    inputContextSize: 4096,
    name: 'Dummy Model',
    outputContextSize: 2048,
    provider: 'mock-provider',
    selected: false,
  }

  // Add the dummy model to the models array
  const newModels = [...state.models, dummyModel]

  // Also update filteredModels if there's no active filter
  const newFilteredModels = state.filterValue === '' ? newModels : state.filteredModels

  return {
    ...state,
    models: newModels,
    filteredModels: newFilteredModels,
  }
}
