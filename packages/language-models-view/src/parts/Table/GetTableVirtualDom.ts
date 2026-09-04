import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getTableBodyVirtualDom } from '../TableBody/GetTableBodyVirtualDom.ts'
import { getTableHeaderVirtualDom } from '../TableHeader/GetTableHeaderVirtualDom.ts'

const tableWrapperNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.TableWrapper,
  type: VirtualDomElements.Div,
}

const tableNode: VirtualDomNode = {
  childCount: 2,
  className: ClassNames.Table,
  onContextMenu: DomEventListenerFunctions.HandleContextMenu,
  type: VirtualDomElements.Table,
}

export const getTableVirtualDom = (models: readonly LanguageModel[], filterValue: string): readonly VirtualDomNode[] => {
  return [tableWrapperNode, tableNode, ...getTableHeaderVirtualDom(filterValue), ...getTableBodyVirtualDom(models)]
}
