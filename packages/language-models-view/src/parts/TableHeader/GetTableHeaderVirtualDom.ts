import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

const getTableHeaderRow = (): VirtualDomNode => {
  return {
    childCount: 2,
    type: VirtualDomElements.Tr,
  }
}

const getTableHeaderCell = (text: string): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Th,
  }
}

export const getTableHead = (): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Thead,
  }
}

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
