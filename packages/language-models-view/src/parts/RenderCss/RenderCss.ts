import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const renderCss = (oldState: LanguageModelsState, newState: LanguageModelsState): any => {
  const css = `--header-height: ${newState.headerHeight}px; --row-height: ${newState.rowHeight}px;`
  return [ViewletCommand.SetCss, newState.uid, css]
}
