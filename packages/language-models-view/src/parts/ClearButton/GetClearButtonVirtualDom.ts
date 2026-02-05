import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

const getClassName = (isDisabled: boolean): string => {
  return ClassNames.SearchFieldButton + (isDisabled ? ' ' + ClassNames.SearchFieldButtonDisabled : '')
}

export const getClearButton = (filterValue: string): readonly VirtualDomNode[] => {
  const isDisabled = filterValue === ''
  return [
    {
      childCount: 1,
      className: getClassName(isDisabled),
      disabled: isDisabled,
      name: 'ClearButton',
      onClick: DomEventListenerFunctions.HandleClearClick,
      title: LanguageModelsStrings.clear(),
      type: VirtualDomElements.Button,
    },
    {
      className: `${ClassNames.MaskIcon} ${ClassNames.MaskIconClearAll}`,
      type: VirtualDomElements.Div,
    },
  ]
}
