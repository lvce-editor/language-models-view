import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'

export interface LanguageModelsState {
  readonly cacheKey: string
  readonly cacheName: string
  readonly filteredModels: readonly LanguageModel[]
  readonly filterValue: string
  readonly focused: 'none' | 'input' | 'table'
  readonly headerHeight: number
  readonly initial: boolean
  readonly inputSource: number
  readonly models: readonly LanguageModel[]
  readonly platform: number
  readonly rowHeight: number
  readonly scrollBarHeight: number
  readonly uid: number
  readonly width: number
  readonly x: number
  readonly y: number
}
