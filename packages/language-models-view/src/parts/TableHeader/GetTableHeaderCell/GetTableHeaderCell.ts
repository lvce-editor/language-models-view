import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getTableHeaderCell = (text: string): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Th,
  }
}
