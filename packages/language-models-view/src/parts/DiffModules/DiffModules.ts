import { diffCss } from '../DiffCss/DiffCss.ts'
import { diffFilterValue } from '../DiffFilterValue/DiffFilterValue.ts'
import { diffFocus } from '../DiffFocus/DiffFocus.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffItems.isEqual, diffFilterValue, diffFocus, diffCss]

export const numbers = [DiffType.RenderIncremental, DiffType.RenderFilterValue, DiffType.RenderFocus, DiffType.RenderCss]
