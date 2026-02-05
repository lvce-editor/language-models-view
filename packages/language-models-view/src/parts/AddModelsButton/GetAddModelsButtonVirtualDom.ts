import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

export const getAddModelsButton = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: `${ClassNames.Button} ${ClassNames.ButtonPrimary}`,
      name: 'AddModelsButton',
      onClick: DomEventListenerFunctions.HandleAddModelsClick,
      type: VirtualDomElements.Button,
    },
    {
      text: LanguageModelsStrings.addModels(),
      type: VirtualDomElements.Text,
    },
  ]
}
