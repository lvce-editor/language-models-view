import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const getTableRow = (model: LanguageModel): VirtualDomNode => {
  const node: VirtualDomNode = {
    childCount: 2,
    type: VirtualDomElements.Tr,
  }
  if (model.selected) {
    return {
      ...node,
      className: ClassNames.Selected,
    }
  }
  return node
}

const getTableCell = (text: string): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Td,
  }
}

export const getTableBody = (models: readonly LanguageModel[]): VirtualDomNode => {
  return {
    childCount: models.length,
    type: VirtualDomElements.TBody,
  }
}

export const getTableBodyVirtualDom = (models: readonly LanguageModel[]): readonly VirtualDomNode[] => {
  return [
    getTableBody(models),
    ...models.flatMap((model) => [
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
    ]),
  ]
}
