import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getModelRowVirtualDom } from './ModelRowVirtualDom/GetModelRowVirtualDom.ts'

export const getTableBody = (models: readonly LanguageModel[]): VirtualDomNode => {
  return {
    childCount: models.length,
    className: ClassNames.TableBody,
    onMouseDown: DomEventListenerFunctions.HandleMouseDown,
    type: VirtualDomElements.TBody,
  }
}

export const getTableBodyVirtualDom = (models: readonly LanguageModel[]): readonly VirtualDomNode[] => {
  return [getTableBody(models), ...models.flatMap(getModelRowVirtualDom)]
}
