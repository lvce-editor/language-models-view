import * as DiffModules from '../DiffModules/DiffModules.ts'
import * as ActivityBarStates from '../LanguageModelsViewStates/LanguageModelsViewStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  return ActivityBarStates.diff(uid, DiffModules.modules, DiffModules.numbers)
}
