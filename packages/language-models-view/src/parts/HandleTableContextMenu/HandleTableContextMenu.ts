import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ComputeRowIndex from '../ComputeRowIndex/ComputeRowIndex.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleTableContextMenu = async (state: LanguageModelsState, x: number, y: number): Promise<LanguageModelsState> => {
  const { filteredModels, headerHeight, rowHeight, y: stateY } = state

  // Calculate relative Y position from the top of the table
  const relativeY = y - stateY

  // Calculate the row index
  const rowIndex = ComputeRowIndex.computeRowIndex(relativeY, headerHeight, rowHeight)

  // Get the model at the computed row index
  const model = filteredModels[rowIndex]

  if (!model) {
    return state
  }

  await ContextMenu.show2(state.uid, 96, x, y, { menuId: 96, modelId: model.id })

  return state
}
