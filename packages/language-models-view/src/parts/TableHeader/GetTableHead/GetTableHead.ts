import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getTableHead = (): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Thead,
  }
}
