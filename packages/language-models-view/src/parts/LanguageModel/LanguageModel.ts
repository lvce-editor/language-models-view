import type { ModelCapabilities } from '../ModelCapabilities/ModelCapabilities.ts'

export interface LanguageModel {
  readonly capabilities: ModelCapabilities
  readonly enabled: boolean
  readonly id: string
  readonly inputContextSize: number
  readonly name: string
  readonly outputContextSize: number
  readonly provider: string
  readonly selected: boolean
}
