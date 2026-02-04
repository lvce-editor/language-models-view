import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

const getTableRow = (model: LanguageModel): VirtualDomNode => {
  const node: VirtualDomNode = {
    childCount: 4,
    className: ClassNames.TableRow,
    type: VirtualDomElements.Tr,
  }
  if (model.selected) {
    return {
      ...node,
      className: `${ClassNames.Selected} ${ClassNames.TableRow}`,
    }
  }
  return node
}

const getTableCell = (text: string): VirtualDomNode => {
  return {
    childCount: 1,
    className: ClassNames.TableCell,
    type: VirtualDomElements.Td,
  }
}

const getModelRowVirtualDom = (model: LanguageModel): readonly VirtualDomNode[] => [
  getTableRow(model),
  getTableCell(model.id),
  {
    text: model.id,
    type: VirtualDomElements.Text,
  },
  getTableCell(model.name),
  {
    text: model.name,
    type: VirtualDomElements.Text,
  },
  getTableCell(model.provider),
  {
    text: model.provider,
    type: VirtualDomElements.Text,
  },
  getTableCell(`in: ${model.inputContextSize}, out: ${model.outputContextSize}`),
  {
    text: `in: ${model.inputContextSize}, out: ${model.outputContextSize}`,
    type: VirtualDomElements.Text,
  },
]

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
