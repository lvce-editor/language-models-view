import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'

export const matchesFilterValue = (model: LanguageModel, lowerValue: string): boolean => {
  const { id, name, provider } = model
  return name.toLowerCase().includes(lowerValue) || id.toLowerCase().includes(lowerValue) || provider.toLowerCase().includes(lowerValue)
}
