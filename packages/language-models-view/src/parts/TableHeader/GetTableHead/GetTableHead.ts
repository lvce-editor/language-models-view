import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/constants'

export const getTableHead = (): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.THead,
  }
}
