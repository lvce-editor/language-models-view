export const computeRowIndex = (relativeY: number, headerHeight: number, rowHeight: number): number => {
  // Check if click is in the header area
  if (relativeY < headerHeight) {
    return -1
  }

  // Calculate the row index (subtract header height first)
  const rowIndex = Math.floor((relativeY - headerHeight) / rowHeight)

  return rowIndex
}
