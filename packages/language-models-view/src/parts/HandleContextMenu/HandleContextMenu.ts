import { MenuEntryId } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleContextMenu = async (state: LanguageModelsState, button: number, eventX: number, eventY: number): Promise<LanguageModelsState> => {
  const { uid } = state
  await ContextMenu.show2(uid, MenuEntryId.ActivityBar, eventX, eventY, {
    menuId: MenuEntryId.ActivityBar,
  })
  return state
}
