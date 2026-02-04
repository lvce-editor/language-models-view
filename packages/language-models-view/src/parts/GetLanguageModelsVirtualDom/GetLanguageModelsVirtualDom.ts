import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'

const getTableHeaderRow = (): VirtualDomNode => {
  return {
    childCount: 2,
    type: VirtualDomElements.Tr,
  }
}

const getTableHeaderCell = (text: string): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Th,
  }
}

const getTableRow = (model: LanguageModel): VirtualDomNode => {
  return {
    childCount: 2,
    type: VirtualDomElements.Tr,
  }
}

const getTableCell = (text: string): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Td,
  }
}

const getTableHead = (): VirtualDomNode => {
  return {
    childCount: 1,
    type: VirtualDomElements.Thead,
  }
}

const getTableBody = (models: readonly LanguageModel[]): VirtualDomNode => {
  return {
    childCount: models.length,
    type: VirtualDomElements.Tbody,
  }
}

const getTable = (models: readonly LanguageModel[]): VirtualDomNode => {
  return {
    childCount: 2,
    type: VirtualDomElements.Table,
  }
}

const getFilterInput = (): VirtualDomNode => {
  return {
    className: 'LanguageModelsFilter',
    placeholder: 'Filter language models...',
    type: VirtualDomElements.Input,
  }
}

export const getLanguageModelsVirtualDom = (models: readonly LanguageModel[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    getFilterInput(),
    getTable(models),
    getTableHead(),
    getTableHeaderRow(),
    getTableHeaderCell('ID'),
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    getTableHeaderCell('Name'),
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
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
