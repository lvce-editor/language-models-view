import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'
import { getTableHead } from './GetTableHead/GetTableHead.ts'
import { getTableHeaderCell } from './GetTableHeaderCell/GetTableHeaderCell.ts'
import { getTableHeaderRow } from './GetTableHeaderRow/GetTableHeaderRow.ts'

export const getTableHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    getTableHead(),
    getTableHeaderRow(),
    getTableHeaderCell(LanguageModelsStrings.id()),
    {
      text: LanguageModelsStrings.id(),
      type: VirtualDomElements.Text,
    },
    getTableHeaderCell(LanguageModelsStrings.name()),
    {
      text: LanguageModelsStrings.name(),
      type: VirtualDomElements.Text,
    },
    getTableHeaderCell(LanguageModelsStrings.provider()),
    {
      text: LanguageModelsStrings.provider(),
      type: VirtualDomElements.Text,
    },
    getTableHeaderCell(LanguageModelsStrings.contextSize()),
    {
      text: LanguageModelsStrings.contextSize(),
      type: VirtualDomElements.Text,
    },
  ]
}
