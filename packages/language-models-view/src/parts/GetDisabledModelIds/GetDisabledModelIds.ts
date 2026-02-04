import type { LanguageModel } from '../LanguageModel/LanguageModel.ts'

const isEnabled = (model: LanguageModel): boolean => model.enabled

const getModelId = (model: LanguageModel): string => model.id

export const getDisabledModelIds = (models: LanguageModel[]): string[] => models.filter((model) => !isEnabled(model)).map(getModelId)
