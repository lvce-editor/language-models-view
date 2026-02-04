import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getAddModelsButton } from '../AddModelsButton/GetAddModelsButtonVirtualDom.ts'
import { getClearButton } from '../ClearButton/GetClearButtonVirtualDom.ts'
import { getFilterInput } from '../FilterInput/GetFilterInputVirtualDom.ts'

export const getLanguageModelsHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 3,
      className: 'LanguageModelsHeader',
      type: VirtualDomElements.Div,
    },
    getFilterInput(),
    ...getClearButton(),
    ...getAddModelsButton(),
  ]
}
