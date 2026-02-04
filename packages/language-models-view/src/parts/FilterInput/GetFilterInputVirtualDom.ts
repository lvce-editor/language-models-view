import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'

export const getFilterInput = (): VirtualDomNode => {
  return {
    className: 'LanguageModelsFilter',
    placeholder: 'Filter language models...',
    type: VirtualDomElements.Input,
  }
}
