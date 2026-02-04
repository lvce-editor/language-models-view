import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { getFilteredModels } from '../GetFilteredModels/GetFilteredModels.ts'

export const handleFilterInput = (state: LanguageModelsState, value: string): LanguageModelsState => {
  const { models } = state
  const filteredModels = getFilteredModels(models, value)

  return { ...state, filteredModels, filterValue: value, inputSource: 1 }
}
