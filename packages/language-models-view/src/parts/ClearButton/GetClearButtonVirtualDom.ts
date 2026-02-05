import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

export const getClearButton = (filterValue: string): readonly VirtualDomNode[] => {
  const isDisabled = filterValue === ''
  return [
    {
      childCount: 1,
      className: 'IconButton' + (isDisabled ? ' SearchFieldButtonDisabled' : ''),
      disabled: isDisabled,
      name: 'ClearButton',
      onClick: DomEventListenerFunctions.HandleClearClick,
      title: LanguageModelsStrings.clear(),
      type: VirtualDomElements.Button,
    },
    {
      className: 'MaskIcon MaskIconClearAll',
      type: VirtualDomElements.Div,
    },
  ]
}
