import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ComputeRowIndex from '../ComputeRowIndex/ComputeRowIndex.ts'
import { selectTableRow } from '../SelectTableRow/SelectTableRow.ts'

export const handleTableRowClick = (state: LanguageModelsState, button: number, x: number, y: number): LanguageModelsState => {
  // Only handle left clicks
  if (button !== 0) {
    return state
  }

  const { headerHeight, rowHeight, y: stateY } = state

  // Calculate relative Y position from the top of the table
  const relativeY = y - stateY

  // Calculate the row index
  const rowIndex = ComputeRowIndex.computeRowIndex(relativeY, headerHeight, rowHeight)

  // Select the row
  return selectTableRow(state, rowIndex)
}
