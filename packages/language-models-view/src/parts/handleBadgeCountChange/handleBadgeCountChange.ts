import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { updateItemsWithBadgeCount } from '../UpdateItemsWithBadgeCount/UpdateItemsWithBadgeCount.ts'

export const handleBadgeCountChange = async (state: LanguageModelsState): Promise<LanguageModelsState> => {
  const { filteredItems } = state
  const newItems = await updateItemsWithBadgeCount(filteredItems)
  return {
    ...state,
    filteredItems: newItems,
  }
}
