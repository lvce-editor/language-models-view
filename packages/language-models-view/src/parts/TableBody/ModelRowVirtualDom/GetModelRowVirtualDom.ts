import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getTableRowClass } from './GetTableRowClass/GetTableRowClass.ts'

const getTableRow = (model: LanguageModel): VirtualDomNode => {
  return {
    childCount: 5,
    className: getTableRowClass(model),
    type: VirtualDomElements.Tr,
  }
}

const getTableCell = (): VirtualDomNode => {
  return {
    childCount: 1,
    className: ClassNames.TableCell,
    type: VirtualDomElements.Td,
  }
}

const getCheckboxCell = (): VirtualDomNode => {
  return {
    childCount: 1,
    className: ClassNames.TableCell,
    type: VirtualDomElements.Td,
  }
}

const getCheckboxInput = (model: LanguageModel): VirtualDomNode => {
  return {
    checked: model.enabled,
    inputType: 'checkbox',
    onMouseDown: DomEventListenerFunctions.HandleCheckboxChange,
    type: VirtualDomElements.Input,
  }
}

export const getModelRowVirtualDom = (model: LanguageModel): readonly VirtualDomNode[] => [
  getTableRow(model),
  getCheckboxCell(),
  getCheckboxInput(model),
  getTableCell(),
  {
    text: model.id,
    type: VirtualDomElements.Text,
  },
  getTableCell(),
  {
    text: model.name,
    type: VirtualDomElements.Text,
  },
  getTableCell(),
  {
    text: model.provider,
    type: VirtualDomElements.Text,
  },
  getTableCell(),
  {
    text: `in: ${model.inputContextSize}, out: ${model.outputContextSize}`,
    type: VirtualDomElements.Text,
  },
]
