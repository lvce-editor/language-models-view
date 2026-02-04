import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
<<<<<<< HEAD
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
=======
import { VirtualDomElements } from '@lvce-editor/constants'
>>>>>>> origin/main

export const getTableHead = (): VirtualDomNode => {
  return {
    childCount: 1,
<<<<<<< HEAD
    type: VirtualDomElements.Thead,
=======
    type: VirtualDomElements.THead,
>>>>>>> origin/main
  }
}
