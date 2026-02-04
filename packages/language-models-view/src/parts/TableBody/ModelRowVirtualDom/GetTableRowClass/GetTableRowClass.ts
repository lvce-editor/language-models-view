import type { LanguageModel } from '../../../LanguageModel/LanguageModel.ts'
import * as ClassNames from '../../../ClassNames/ClassNames.ts'

export const getTableRowClass = (model: LanguageModel): string => {
  const classes: string[] = []
  if (model.selected) {
    classes.push(ClassNames.Selected)
  }
  if (!model.enabled) {
    classes.push(ClassNames.Disabled)
  }
  if (classes.length > 0) {
    return `${classes.join(' ')} ${ClassNames.TableRow}`
  }
  return ClassNames.TableRow
}
