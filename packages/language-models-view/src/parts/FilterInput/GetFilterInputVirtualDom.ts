import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

const filterInputClassName = mergeClassNames(ClassNames.InputBox, ClassNames.LanguageModelsFilter)

export const getFilterInput = (): VirtualDomNode => {
  return {
    autocomplete: 'off',
    className: filterInputClassName,
    inputType: 'search',
    name: 'LanguageModelsFilter',
    onInput: DomEventListenerFunctions.HandleFilterInput,
    placeholder: LanguageModelsStrings.filterLanguageModels(),
    type: VirtualDomElements.Input,
  }
}
