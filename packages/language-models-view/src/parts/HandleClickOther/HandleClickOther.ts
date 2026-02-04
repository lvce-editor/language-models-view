import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as SideBar from '../SideBar/SideBar.ts'

export const handleClickOther = async (state: LanguageModelsState, x: number, y: number, viewletId: string): Promise<LanguageModelsState> => {
  const { currentViewletId, sideBarVisible } = state
  if (sideBarVisible) {
    if (currentViewletId === viewletId) {
      await SideBar.hide()
      return state
    }
    await SideBar.show(sideBarVisible, viewletId)
    return state
  }
  await SideBar.show(sideBarVisible, currentViewletId)
  return state
}
