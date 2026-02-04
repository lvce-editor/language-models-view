import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const selectTableRow = (state: LanguageModelsState, index: number): LanguageModelsState => {
  const { filteredModels, models } = state

  // Check if the index is valid
  if (index < 0 || index >= filteredModels.length) {
    return state
  }

  // Get the clicked model
  const clickedModel = filteredModels[index]

  // Guard against undefined clickedModel
  if (!clickedModel) {
    return state
  }

  // Update models - toggle selection on clicked model, clear others
  const updatedModels = models.map((model) => ({
    ...model,
    selected: model.id === clickedModel.id ? !model.selected : false,
  }))

  // Update filtered models
  const updatedFilteredModels = filteredModels.map((model) => ({
    ...model,
    selected: model.id === clickedModel.id ? !model.selected : false,
  }))

  return {
    ...state,
    filteredModels: updatedFilteredModels,
    models: updatedModels,
  }
}
