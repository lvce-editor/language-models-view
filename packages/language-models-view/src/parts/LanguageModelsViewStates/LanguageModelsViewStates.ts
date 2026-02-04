import * as ViewletRegistry from '@lvce-editor//viewlet-registry'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const { diff, get, getCommandIds, registerCommands, set, wrapCommand, wrapGetter } = ViewletRegistry.create<LanguageModelsState>()
