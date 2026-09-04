import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../../ClassNames/ClassNames.ts'

const tableHeaderRowNode: VirtualDomNode = {
  childCount: 5,
  className: ClassNames.TableRow,
  type: VirtualDomElements.Tr,
}

export const getTableHeaderRow = (): VirtualDomNode => {
  return tableHeaderRowNode
}
