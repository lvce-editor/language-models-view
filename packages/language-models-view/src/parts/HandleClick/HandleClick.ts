import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { getIndexFromPosition } from '../GetIndexFromPosition/GetIndexFromPosition.ts'
import { handleClickIndex } from '../HandleClickIndex/HandleClickIndex.ts'

export const handleClick = async (state: LanguageModelsState, button: number, eventX: number, eventY: number): Promise<LanguageModelsState> => {
  const { filteredItems, height, itemHeight, y } = state
  const index = getIndexFromPosition(y, eventX, eventY, itemHeight, filteredItems.length, height)
  return handleClickIndex(state, button, index, eventX, eventY)
}
