import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ComputeRowIndex from '../ComputeRowIndex/ComputeRowIndex.ts'
import * as UpdateModel from '../UpdateModel/UpdateModel.ts'

export const handleCheckboxChange = async (
  state: LanguageModelsState,
  button: number,
  x: number,
  y: number,
  targetChecked: boolean,
): Promise<LanguageModelsState> => {
  // Only handle left clicks
  if (button !== 0) {
    return state
  }

  const { headerHeight, models, rowHeight, y: stateY } = state

  // Calculate relative Y position from the top of the table
  const relativeY = y - stateY

  // Calculate the row index
  const rowIndex = ComputeRowIndex.computeRowIndex(relativeY, headerHeight, rowHeight)

  // Invalid row index
  if (rowIndex < 0 || rowIndex >= models.length) {
    return state
  }

  const model = models[rowIndex]
  if (!model) {
    return state
  }

  // Find the checkbox element at the clicked position and get its state
  // The checkbox is in the first cell of the row
  // If the clicked element is a checkbox input, use its checked state
  // Otherwise, toggle the enabled state
  // eslint-disable-next-line unicorn/prefer-logical-operator-over-ternary
  const newEnabled = targetChecked ? targetChecked : !model.enabled

  // Update the model with the new enabled state
  return UpdateModel.updateModel(state, model.id, newEnabled)
}
