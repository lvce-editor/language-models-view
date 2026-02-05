import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null
}

const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const restoreState = (state: LanguageModelsState, savedState: unknown): LanguageModelsState => {
  if (!isObject(savedState)) {
    return state
  }

  const updates: Partial<{ -readonly [K in keyof LanguageModelsState]: LanguageModelsState[K] }> = {}

  // Try to restore filter value
  if ('filterValue' in savedState && isString(savedState.filterValue)) {
    updates.filterValue = savedState.filterValue
  }

  return {
    ...state,
    ...updates,
  }
}
