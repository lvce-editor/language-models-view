import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'

const matchesFilterValue = (model: LanguageModel, lowerValue: string): boolean => {
  const { id, name, provider } = model
  return name.toLowerCase().includes(lowerValue) || id.toLowerCase().includes(lowerValue) || provider.toLowerCase().includes(lowerValue)
}

export const getFilteredModels = (models: LanguageModel[], value: string): LanguageModel[] => {
  if (value === '') {
    return models
  }

  const lowerValue = value.toLowerCase()
  return models.filter((model) => matchesFilterValue(model, lowerValue))
}
