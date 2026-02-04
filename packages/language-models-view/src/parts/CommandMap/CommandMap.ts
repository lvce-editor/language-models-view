import { terminate } from '@lvce-editor/viewlet-registry'
import * as Create from '../Create/Create.ts'
import { diff2 } from '../Diff2/Diff2.ts'
import { disableModel } from '../DisableModel/DisableModel.ts'
import { enableModel } from '../EnableModel/EnableModel.ts'
import { getKeyBindings } from '../GetKeyBindings/GetKeyBindings.ts'
import { getMenuEntries } from '../GetMenuEntries/GetMenuEntries.ts'
import { getMenuEntryIds } from '../GetMenuEntryIds/GetMenuEntryIds.ts'
import { handleAddModelsClick } from '../HandleAddModelsClick/HandleAddModelsClick.ts'
import { handleClearClick } from '../HandleClearClick/HandleClearClick.ts'
import { handleFilterInput } from '../HandleFilterInput/HandleFilterInput.ts'
import { handleTableRowClick } from '../HandleTableRowClick/HandleTableRowClick.ts'
import * as WrapCommand from '../LanguageModelsViewStates/LanguageModelsViewStates.ts'
import { loadContent } from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import { saveState } from '../SaveState/SaveState.ts'
import { selectTableRow } from '../SelectTableRow/SelectTableRow.ts'

export const commandMap = {
  'LanguageModels.create': Create.create,
  'LanguageModels.diff2': diff2,
  'LanguageModels.disableModel': WrapCommand.wrapCommand(disableModel),
  'LanguageModels.enableModel': WrapCommand.wrapCommand(enableModel),
  'LanguageModels.getCommandIds': WrapCommand.getCommandIds,
  'LanguageModels.getKeyBindings': getKeyBindings,
  'LanguageModels.getMenuEntries': WrapCommand.wrapGetter(getMenuEntries),
  'LanguageModels.getMenuEntryIds': getMenuEntryIds,
  'LanguageModels.handleAddModelsClick': WrapCommand.wrapCommand(handleAddModelsClick),
  'LanguageModels.handleClearClick': WrapCommand.wrapCommand(handleClearClick),
  'LanguageModels.handleFilterInput': WrapCommand.wrapCommand(handleFilterInput),
  'LanguageModels.handleTableRowClick': WrapCommand.wrapCommand(handleTableRowClick),
  'LanguageModels.loadContent': WrapCommand.wrapCommand(loadContent),
  'LanguageModels.render2': Render2.render2,
  'LanguageModels.renderEventListeners': RenderEventListeners.renderEventListeners,
  'LanguageModels.saveState': WrapCommand.wrapGetter(saveState),
  'LanguageModels.selectTableRow': WrapCommand.wrapCommand(selectTableRow),
  'LanguageModels.terminate': terminate,
}
