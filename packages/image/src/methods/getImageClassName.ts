export default function getImageClassName (fill?: boolean) {
  let className = ''
  if (fill) {
    className += 'w-full h-full'
  }
  return className
}