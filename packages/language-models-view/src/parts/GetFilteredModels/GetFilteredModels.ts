import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'
import { matchesFilterValue } from '../MatchesFilterValue/MatchesFilterValue.ts'

export const getFilteredModels = (models: LanguageModel[], value: string): LanguageModel[] => {
  if (value === '') {
    return models
  }

  const lowerValue = value.toLowerCase()
  return models.filter((model) => matchesFilterValue(model, lowerValue))
}
