import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as ExplorerStates from '../LanguageModelsViewStates/LanguageModelsViewStates.ts'

// TODO parentUid might ot be needed
export const create = (
  id: number,
  uri: string,
  x: number,
  y: number,
  width: number,
  height: number,
  args: any,
  parentUid: any,
  platform: number = 0,
): any => {
  const state: LanguageModelsState = {
    models:[],
    platform,
    scrollBarHeight: 0,
    uid: id,
    width,
    x,
    y
  }
  ExplorerStates.set(id, state, state)
  return state
}
