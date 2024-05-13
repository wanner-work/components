export default function getImageStyleProperties (fill?: boolean, height?: number, width?: number) {
  let style = {
    height: undefined,
    width: undefined
  }
  if (!fill) {
    style.height = `${height}px`
    style.width = `${width}px`
  }
  return style
}