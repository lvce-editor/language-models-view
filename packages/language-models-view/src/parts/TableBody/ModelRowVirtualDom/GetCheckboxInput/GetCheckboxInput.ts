import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../../../LanguageModel/LanguageModel.ts'
import * as DomEventListenerFunctions from '../../../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getCheckboxInput = (model: LanguageModel): VirtualDomNode => {
  return {
    checked: model.enabled,
    inputType: 'checkbox',
    name: model.id,
    onChange: DomEventListenerFunctions.HandleCheckboxChange,
    type: VirtualDomElements.Input,
  }
}
