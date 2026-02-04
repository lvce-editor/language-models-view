import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import { getLanguageModelsHeaderVirtualDom } from '../LanguageModelsHeader/GetLanguageModelsHeaderVirtualDom.ts'
import { getTableVirtualDom } from '../Table/GetTableVirtualDom.ts'

export const getLanguageModelsVirtualDom = (models: readonly LanguageModel[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    ...getLanguageModelsHeaderVirtualDom(),
    ...getTableVirtualDom(models),
  ]
}
