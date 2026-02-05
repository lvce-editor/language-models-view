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
): void => {
  const state: LanguageModelsState = {
    cacheKey: 'disabled-models',
    cacheName: 'language-models-cache',
    filteredModels: [],
    filterValue: '',
    focused: 'none',
    headerHeight: 25,
    initial: true,
    inputSource: 1,
    models: [],
    platform,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: id,
    width,
    x,
    y,
  }
  ExplorerStates.set(id, state, state)
}
