import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ActivityBarItemFlags from '../ActivityBarItemFlags/ActivityBarItemFlags.ts'
import { setFlag } from '../SetFlag/SetFlag.ts'

export const handleSideBarHidden = (state: LanguageModelsState): LanguageModelsState => {
  const itemsCleared = state.activityBarItems.map((item) => {
    const withoutSelected = setFlag(item, ActivityBarItemFlags.Selected, false)
    return setFlag(withoutSelected, ActivityBarItemFlags.Focused, false)
  })
  return {
    ...state,
    activityBarItems: itemsCleared,
    focusedIndex: -1,
    selectedIndex: -1,
    sideBarVisible: false,
  }
}
