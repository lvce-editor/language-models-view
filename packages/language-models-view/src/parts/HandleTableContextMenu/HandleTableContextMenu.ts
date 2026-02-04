import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleTableContextMenu = async (state: LanguageModelsState, x: number, y: number): Promise<LanguageModelsState> => {
  await ContextMenu.show2(state.uid, 96, x, y, { menuId: 96 })

  return state
}
