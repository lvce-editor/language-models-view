import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../../ClassNames/ClassNames.ts'

export const getTableHeaderRow = (): VirtualDomNode => {
  return {
    childCount: 5,
    className: ClassNames.TableRow,
    type: VirtualDomElements.Tr,
  }
}
