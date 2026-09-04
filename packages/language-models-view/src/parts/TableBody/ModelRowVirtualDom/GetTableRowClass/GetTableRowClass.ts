import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../../../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../../../ClassNames/ClassNames.ts'

export const getTableRowClass = (model: LanguageModel): string => {
  return mergeClassNames(model.selected ? ClassNames.TableRowSelected : '', model.enabled ? '' : ClassNames.TableRowDisabled, ClassNames.TableRow)
}
