import type { ContextMenuProps } from '../ContextMenuProps/ContextMenuProps.ts'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

export const getMenuEntries = (state: LanguageModelsState, options: ContextMenuProps): readonly MenuEntry[] => {
  const { filteredModels } = state

  // For now, use the selected model if available
  // In a more complete implementation, you could compute the row from context menu position
  const selectedModel = filteredModels.find((model) => model.selected)

  if (!selectedModel) {
    return []
  }

  const entries: MenuEntry[] = []

  // Add Enable Model entry if the model is currently disabled
  if (!selectedModel.enabled) {
    entries.push({
      args: selectedModel.id,
      command: 'LanguageModels.enableModel',
      flags: 0,
      id: 'enable-model',
      label: LanguageModelsStrings.enableModel(),
    })
  }

  // Add Disable Model entry if the model is currently enabled
  if (selectedModel.enabled) {
    entries.push({
      args: selectedModel.id,
      command: 'LanguageModels.disableModel',
      flags: 0,
      id: 'disable-model',
      label: LanguageModelsStrings.disableModel(),
    })
  }

  return entries
}
