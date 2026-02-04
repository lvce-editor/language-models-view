import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { getActivityBarItems } from '../GetActivityBarItems/GetActivityBarItems.ts'
import { getFilteredActivityBarItems } from '../GetFilteredActivityBarItems/GetFilteredActivityBarItems.ts'
import { getSideBarPosition } from '../GetSideBarPosition/GetSideBarPosition.ts'
import { markSelected } from '../MarkSelected/MarkSelected.ts'
import { updateItemsWithBadgeCount } from '../UpdateItemsWithBadgeCount/UpdateItemsWithBadgeCount.ts'

export const handleSettingsChanged = async (state: LanguageModelsState): Promise<LanguageModelsState> => {
  const { height, itemHeight, selectedIndex } = state
  const items = getActivityBarItems(state)
  const itemsWithSelected = markSelected(items, selectedIndex)
  const filteredItems = getFilteredActivityBarItems(itemsWithSelected, height, itemHeight)
  const newItems = await updateItemsWithBadgeCount(filteredItems)
  const sidebarLocation = await getSideBarPosition()
  return {
    ...state,
    activityBarItems: itemsWithSelected,
    filteredItems: newItems,
    sideBarLocation: sidebarLocation,
  }
}
