interface ContextMenuPropsBase {
  readonly menuId: number
}

interface ContextMenuPropsTableRow extends ContextMenuPropsBase {
  readonly menuId: 96
  readonly modelId: string
}

export type ContextMenuProps = ContextMenuPropsTableRow
