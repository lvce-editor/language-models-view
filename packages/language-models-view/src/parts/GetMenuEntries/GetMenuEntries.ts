import type { ContextMenuProps } from '../ContextMenuProps/ContextMenuProps.ts'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'

export const getMenuEntries = (state: LanguageModelsState, options: ContextMenuProps): readonly MenuEntry[] => {
  return []
}
