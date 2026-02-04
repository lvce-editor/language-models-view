import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

export const getClearButton = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: 'Button ClearButton',
      name: 'ClearButton',
      onClick: DomEventListenerFunctions.HandleClearClick,
      type: VirtualDomElements.Button,
    },
    {
      text: LanguageModelsStrings.clear(),
      type: VirtualDomElements.Text,
    },
  ]
}
