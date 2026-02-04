import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import { renderFilterValue } from '../RenderFilterValue/RenderFilterValue.ts'
import { renderIncremental } from '../RenderIncremental/RenderIncremental.ts'
import * as RenderInputValue from '../RenderInputValue/RenderInputValue.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderFilterValue:
      return renderFilterValue
    case DiffType.RenderIncremental:
      return renderIncremental
    case DiffType.RenderInputValue:
      return RenderInputValue.renderInputValue
    case DiffType.RenderItems:
      return RenderItems.renderItems
    default:
      throw new Error('unknown renderer')
  }
}
