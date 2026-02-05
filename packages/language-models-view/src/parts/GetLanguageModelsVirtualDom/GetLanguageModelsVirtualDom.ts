import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getLanguageModelsHeaderVirtualDom } from '../LanguageModelsHeader/GetLanguageModelsHeaderVirtualDom.ts'
import * as LanguageModelsStrings from '../LanguageModelsStrings/LanguageModelsStrings.ts'
import { getTableVirtualDom } from '../Table/GetTableVirtualDom.ts'

const getNoMatchingModelsMessage = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.NoMatchingModels,
      type: VirtualDomElements.P,
    },
    {
      text: LanguageModelsStrings.noMatchingModels(),
      type: VirtualDomElements.Text,
    },
  ]
}

export const getLanguageModelsVirtualDom = (models: readonly LanguageModel[], filterValue: string): readonly VirtualDomNode[] => {
  const content = models.length === 0 ? getNoMatchingModelsMessage() : getTableVirtualDom(models, filterValue)
  return [
    {
      childCount: 2,
      className: ClassNames.LanguageModels,
      type: VirtualDomElements.Div,
    },
    ...getLanguageModelsHeaderVirtualDom(filterValue),
    ...content,
  ]
}
