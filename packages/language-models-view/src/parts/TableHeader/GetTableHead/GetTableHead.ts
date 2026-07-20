import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

const tableHeadNode: VirtualDomNode = {
  childCount: 1,
  type: VirtualDomElements.THead,
}

export const getTableHead = (): VirtualDomNode => {
  return tableHeadNode
}
