import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getTableHeaderRow = (): VirtualDomNode => {
  return {
    childCount: 4,
    type: VirtualDomElements.Tr,
  }
}
