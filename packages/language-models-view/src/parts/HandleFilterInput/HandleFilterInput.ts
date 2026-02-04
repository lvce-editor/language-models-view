import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const handleFilterInput = (state: LanguageModelsState, value: string): LanguageModelsState => {
  const { models } = state
  const lowerValue = value.toLowerCase()
  const filteredModels =
    value === '' ? models : models.filter(({ id, name }) => name.toLowerCase().includes(lowerValue) || id.toLowerCase().includes(lowerValue))

  return { ...state, filteredModels, filterValue: value, inputSource: 1 }
}
