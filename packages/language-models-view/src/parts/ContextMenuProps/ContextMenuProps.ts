export interface ContextMenuPropsBase {
  readonly menuId: number
}

export interface ContextMenuPropsTableRow extends ContextMenuPropsBase {
  readonly menuId: 96
  readonly modelId: string
}

export type ContextMenuProps = ContextMenuPropsTableRow
