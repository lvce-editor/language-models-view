import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

export const getFilterInput = (): VirtualDomNode => {
  return {
    className: 'InputBox LanguageModelsFilter',
    inputType: 'search',
    name: 'LanguageModelsFilter',
    onInput: DomEventListenerFunctions.HandleFilterInput,
    placeholder: LanguageModelsStrings.filterLanguageModels(),
    type: VirtualDomElements.Input,
  }
}
