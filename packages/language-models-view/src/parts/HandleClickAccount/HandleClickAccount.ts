import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

// Use a unique number for the Account menu ID
const ACCOUNT_MENU_ID = 1000

export const handleClickAccount = async (state: LanguageModelsState, eventX: number, eventY: number, viewletId: string): Promise<LanguageModelsState> => {
  const { uid } = state
  await ContextMenu.show2(uid, ACCOUNT_MENU_ID, eventX, eventY, {
    menuId: ACCOUNT_MENU_ID,
  })
  return state
}
