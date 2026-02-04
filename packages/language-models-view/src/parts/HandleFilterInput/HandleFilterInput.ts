import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const handleFilterInput = (state: LanguageModelsState, value: string): LanguageModelsState => {
  const { models } = state
  const lowerValue = value.toLowerCase()
  const filteredModels =
    value === ''
      ? models
      : models.filter(({ name, id }) => name.toLowerCase().includes(lowerValue) || id.toLowerCase().includes(lowerValue))

  return {
    ...state,
    filteredModels,
    filterValue: value,
  }
}
