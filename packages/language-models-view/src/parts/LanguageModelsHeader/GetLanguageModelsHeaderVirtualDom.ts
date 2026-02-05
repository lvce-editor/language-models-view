import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getAddModelsButton } from '../AddModelsButton/GetAddModelsButtonVirtualDom.ts'
import { getClearButton } from '../ClearButton/GetClearButtonVirtualDom.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getFilterInput } from '../FilterInput/GetFilterInputVirtualDom.ts'

export const getLanguageModelsHeaderVirtualDom = (filterValue: string): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 3,
      className: 'LanguageModelsHeader',
      onContextMenu: DomEventListenerFunctions.HandleHeaderContextMenu,
      type: VirtualDomElements.Div,
    },
    getFilterInput(),
    ...getClearButton(filterValue),
    ...getAddModelsButton(),
  ]
}
