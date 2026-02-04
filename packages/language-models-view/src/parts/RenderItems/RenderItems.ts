import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { getActivityBarVirtualDom } from '../GetActivityBarVirtualDom/GetActivityBarVirtualDom.ts'

export const renderItems = (oldState: LanguageModelsState, newState: LanguageModelsState): any => {
  const { filteredItems, initial, uid } = newState
  if (initial) {
    return [ViewletCommand.SetDom2, uid, []]
  }
  const dom = getActivityBarVirtualDom(filteredItems)
  return [ViewletCommand.SetDom2, uid, dom]
}
