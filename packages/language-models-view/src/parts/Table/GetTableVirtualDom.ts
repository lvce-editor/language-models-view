import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import { getTableBodyVirtualDom } from '../TableBody/GetTableBodyVirtualDom.ts'
import { getTableHeaderVirtualDom } from '../TableHeader/GetTableHeaderVirtualDom.ts'

export const getTableVirtualDom = (models: readonly LanguageModel[], filterValue: string): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 2,
      type: VirtualDomElements.Table,
    },
    ...getTableHeaderVirtualDom(filterValue),
    ...getTableBodyVirtualDom(models),
  ]
}
