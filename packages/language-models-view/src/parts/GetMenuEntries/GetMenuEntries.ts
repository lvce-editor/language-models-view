import type { ContextMenuProps } from '../ContextMenuProps/ContextMenuProps.ts'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

export const getMenuEntries = (state: LanguageModelsState, options: ContextMenuProps): readonly MenuEntry[] => {
  const { filteredModels } = state
  const { modelId } = options

  // Find the model with the provided modelId
  const model = filteredModels.find((m) => m.id === modelId)

  if (!model) {
    return []
  }

  const entries: MenuEntry[] = []

  // Add Enable Model entry if the model is currently disabled
  if (!model.enabled) {
    entries.push({
      args: model.id,
      command: 'LanguageModels.enableModel',
      flags: 0,
      id: 'enable-model',
      label: LanguageModelsStrings.enableModel(),
    })
  }

  // Add Disable Model entry if the model is currently enabled
  if (model.enabled) {
    entries.push({
      args: model.id,
      command: 'LanguageModels.disableModel',
      flags: 0,
      id: 'disable-model',
      label: LanguageModelsStrings.disableModel(),
    })
  }

  return entries
}
