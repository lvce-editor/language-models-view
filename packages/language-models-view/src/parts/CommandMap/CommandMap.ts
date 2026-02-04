import * as Create from '../Create/Create.ts'
import { diff2 } from '../Diff2/Diff2.ts'
import { getKeyBindings } from '../GetKeyBindings/GetKeyBindings.ts'
import { getMenuEntries } from '../GetMenuEntries/GetMenuEntries.ts'
import { getMenuEntryIds } from '../GetMenuEntryIds/GetMenuEntryIds.ts'
import * as WrapCommand from '../LanguageModelsViewStates/LanguageModelsViewStates.ts'
import { loadContent } from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'

export const commandMap = {
  'LanguageModels.create': Create.create,
  'LanguageModels.diff2': diff2,
  'LanguageModels.getCommandIds': WrapCommand.getCommandIds,
  'LanguageModels.getKeyBindings': getKeyBindings,
  'LanguageModels.getMenuEntries': WrapCommand.wrapGetter(getMenuEntries),
  'LanguageModels.getMenuEntryIds': getMenuEntryIds,
  'LanguageModels.loadContent': WrapCommand.wrapCommand(loadContent),
  'LanguageModels.render2': Render2.render2,
  'LanguageModels.renderEventListeners': RenderEventListeners.renderEventListeners,
}
