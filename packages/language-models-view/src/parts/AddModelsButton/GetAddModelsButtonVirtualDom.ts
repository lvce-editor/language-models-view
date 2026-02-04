import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

export const getAddModelsButton = (): VirtualDomNode => {
  return {
    childCount: 1,
    className: 'Button AddModelsButton',
    onClick: DomEventListenerFunctions.HandleAddModelsClick,
    type: VirtualDomElements.Button,
  }
}
