export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsTableRow extends ContextMenuPropsBase {
  readonly menuId: 96
}

export type ContextMenuProps = ContextMenuPropsTableRow
