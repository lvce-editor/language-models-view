import type { MenuEntryId } from '@lvce-editor/constants'

export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsTableRow extends ContextMenuPropsBase {
  readonly menuId: typeof MenuEntryId.ActivityBarAdditionalViews
}

export type ContextMenuProps = ContextMenuPropsTableRow
