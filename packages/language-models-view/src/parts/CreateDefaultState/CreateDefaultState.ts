import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const createDefaultState = (): LanguageModelsState => ({
  cacheKey: 'disabled-models',
  cacheName: 'language-models-cache',
  filteredModels: [],
  filterValue: '',
  focused: 'none',
  headerHeight: 25,
  initial: false,
  inputSource: 1,
  models: [],
  platform: 0,
  rowHeight: 20,
  scrollBarHeight: 0,
  uid: 1,
  width: 0,
  x: 0,
  y: 0,
})
