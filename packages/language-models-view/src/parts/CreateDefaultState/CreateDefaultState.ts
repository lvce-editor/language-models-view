import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const createDefaultState = (): LanguageModelsState => ({
  filteredModels: [],
  filterValue: '',
  initial: false,
  models: [],
  platform: 0,
  scrollBarHeight: 0,
  uid: 1,
  width: 0,
  x: 0,
  y: 0,
})
