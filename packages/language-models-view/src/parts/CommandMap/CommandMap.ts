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
  'ActivityBar.create': Create.create,
  'ActivityBar.diff2': diff2,
  'ActivityBar.getCommandIds': WrapCommand.getCommandIds,
  'ActivityBar.getKeyBindings': getKeyBindings,
  'ActivityBar.getMenuEntries': WrapCommand.wrapGetter(getMenuEntries),
  'ActivityBar.getMenuEntryIds': getMenuEntryIds,
  'ActivityBar.loadContent': WrapCommand.wrapCommand(loadContent),
  'ActivityBar.render2': Render2.render2,
  'ActivityBar.renderEventListeners': RenderEventListeners.renderEventListeners,
}
