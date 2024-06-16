/**
 *
 * @param styleText string css source
 * @returns style
 */
export function getStyle(styleText: string) {
  const style = document.createElement('style')
  style.textContent = styleText
  return style
}
