import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'

export interface LanguageModelsState {
  readonly filteredModels: readonly LanguageModel[]
  readonly filterValue: string
  readonly initial: boolean
  readonly models: readonly LanguageModel[]
  readonly platform: number
  readonly scrollBarHeight: number
  readonly uid: number
  readonly width: number
  readonly x: number
  readonly y: number
}
