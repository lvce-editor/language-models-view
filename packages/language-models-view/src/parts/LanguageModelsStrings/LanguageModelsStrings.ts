import * as I18nString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const account = (): string => {
  return I18nString.i18nString(UiStrings.Account)
}

export const addModels = (): string => {
  return I18nString.i18nString(UiStrings.AddModels)
}

export const filterLanguageModels = (): string => {
  return I18nString.i18nString(UiStrings.FilterLanguageModels)
}

export const id = (): string => {
  return I18nString.i18nString(UiStrings.Id)
}

export const name = (): string => {
  return I18nString.i18nString(UiStrings.Name)
}

export const provider = (): string => {
  return I18nString.i18nString(UiStrings.Provider)
}

export const contextSize = (): string => {
  return I18nString.i18nString(UiStrings.ContextSize)
}
