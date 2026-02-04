import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ComputeRowIndex from '../ComputeRowIndex/ComputeRowIndex.ts'

export const handleTableRowClick = (state: LanguageModelsState, button: number, x: number, y: number): LanguageModelsState => {
  // Only handle left clicks
  if (button !== 0) {
    return state
  }

  const { filteredModels, headerHeight, models, rowHeight, y: stateY } = state

  // Calculate relative Y position from the top of the table
  const relativeY = y - stateY

  // Calculate the row index
  const rowIndex = ComputeRowIndex.computeRowIndex(relativeY, headerHeight, rowHeight)

  // Check if the index is valid
  if (rowIndex < 0 || rowIndex >= filteredModels.length) {
    return state
  }

  // Get the clicked model
  const clickedModel = filteredModels[rowIndex]

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
