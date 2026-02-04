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

  // Try to restore scroll position
  if ('x' in savedState && typeof savedState.x === 'number') {
    updates.x = savedState.x
  }

  if ('y' in savedState && typeof savedState.y === 'number') {
    updates.y = savedState.y
  }

  return {
    ...state,
    ...updates,
  }
}
