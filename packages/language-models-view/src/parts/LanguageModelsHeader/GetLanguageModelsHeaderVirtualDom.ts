import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getFilterInput } from '../FilterInput/GetFilterInputVirtualDom.ts'

export const getLanguageModelsHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: 'LanguageModelsHeader',
      type: VirtualDomElements.Div,
    },
    getFilterInput(),
  ]
}
