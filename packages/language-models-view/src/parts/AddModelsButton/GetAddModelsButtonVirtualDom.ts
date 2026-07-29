import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'

const addModelsButtonNode: VirtualDomNode = {
  childCount: 1,
  className: mergeClassNames(ClassNames.Button, ClassNames.ButtonPrimary),
  name: 'AddModelsButton',
  onClick: DomEventListenerFunctions.HandleAddModelsClick,
  type: VirtualDomElements.Button,
}

export const getAddModelsButton = (): readonly VirtualDomNode[] => {
  return [
    addModelsButtonNode,
    {
      text: LanguageModelsStrings.addModels(),
      type: VirtualDomElements.Text,
    },
  ]
}
