import { MenuEntryId } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleClickAdditionalViews = async (
  state: LanguageModelsState,
  eventX: number,
  eventY: number,
  viewletId: string,
): Promise<LanguageModelsState> => {
  const { uid } = state
  await ContextMenu.show2(uid, MenuEntryId.ActivityBarAdditionalViews, eventX, eventY, {
    menuId: MenuEntryId.ActivityBarAdditionalViews,
    viewletId,
  })
  return state
}
