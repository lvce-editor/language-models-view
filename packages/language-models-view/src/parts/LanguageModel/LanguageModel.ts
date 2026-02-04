export interface LanguageModel {
  readonly enabled: boolean
  readonly id: string
  readonly inputContextSize: number
  readonly name: string
  readonly outputContextSize: number
  readonly provider: string
  readonly selected: boolean
}
