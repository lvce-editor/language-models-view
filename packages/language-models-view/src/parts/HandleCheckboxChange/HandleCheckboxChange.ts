import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ComputeRowIndex from '../ComputeRowIndex/ComputeRowIndex.ts'
import * as UpdateModel from '../UpdateModel/UpdateModel.ts'

export const handleCheckboxChange = async (
  state: LanguageModelsState,
  targetName: string,
  targetChecked: 'on' | 'off',
): Promise<LanguageModelsState> => {
  const { headerHeight, models, rowHeight, y: stateY } = state

  const targetCheckedBoolean = targetChecked === 'on' ? true : false
  // Calculate relative Y position from the top of the table
  const relativeY = y - stateY

  console.log({ relativeY, stateY, y })

  // Calculate the row index
  const rowIndex = ComputeRowIndex.computeRowIndex(relativeY, headerHeight, rowHeight)

  console.log({ rowIndex })
  // Invalid row index
  if (rowIndex < 0 || rowIndex >= models.length) {
    return state
  }

  const model = models[rowIndex]
  if (!model) {
    return state
  }

  const newEnabled = !targetCheckedBoolean

  // Update the model with the new enabled state
  return UpdateModel.updateModel(state, model.id, newEnabled)
}
