import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import { renderCss } from '../RenderCss/RenderCss.ts'
import { renderFilterValue } from '../RenderFilterValue/RenderFilterValue.ts'
import { renderFocus } from '../RenderFocus/RenderFocus.ts'
import { renderIncremental } from '../RenderIncremental/RenderIncremental.ts'
import * as RenderInputValue from '../RenderInputValue/RenderInputValue.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderFilterValue:
      return renderFilterValue
    case DiffType.RenderFocus:
      return renderFocus
    case DiffType.RenderIncremental:
      return renderIncremental
    case DiffType.RenderInputValue:
      return RenderInputValue.renderInputValue
    case DiffType.RenderItems:
      return RenderItems.renderItems
    case DiffType.RenderCss:
      return renderCss
    default:
      throw new Error('unknown renderer')
  }
}
