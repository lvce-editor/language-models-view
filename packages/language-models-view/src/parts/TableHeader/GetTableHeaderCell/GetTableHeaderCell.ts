import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../../ClassNames/ClassNames.ts'

export const getTableHeaderCell = (text: string): VirtualDomNode => {
  return {
    childCount: 1,
    className: ClassNames.TableCell,
    type: VirtualDomElements.Th,
  }
}
