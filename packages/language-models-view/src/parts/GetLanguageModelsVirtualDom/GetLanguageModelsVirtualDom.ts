import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import { getFilterInput } from '../FilterInput/GetFilterInputVirtualDom.ts'
import { getTableBodyVirtualDom } from '../TableBody/GetTableBodyVirtualDom.ts'
import { getTableHeaderVirtualDom } from '../TableHeader/GetTableHeaderVirtualDom.ts'

const getTable = (models: readonly LanguageModel[]): VirtualDomNode => {
  return {
    childCount: 2,
    type: VirtualDomElements.Table,
  }
}

export const getLanguageModelsVirtualDom = (models: readonly LanguageModel[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    getFilterInput(),
    getTable(models),
    ...getTableHeaderVirtualDom(),
    ...getTableBodyVirtualDom(models),
  ]
}
