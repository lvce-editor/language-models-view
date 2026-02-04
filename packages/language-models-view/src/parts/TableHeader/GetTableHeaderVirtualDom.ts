import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTableHead } from './GetTableHead/GetTableHead.ts'
import { getTableHeaderCell } from './GetTableHeaderCell/GetTableHeaderCell.ts'
import { getTableHeaderRow } from './GetTableHeaderRow/GetTableHeaderRow.ts'

export const getTableHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    getTableHead(),
    getTableHeaderRow(),
    getTableHeaderCell('ID'),
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    getTableHeaderCell('Name'),
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
  ]
}
