import BoxPadding from '../interfaces/BoxPadding'

export default function getBoxPaddingY(width: BoxPadding | 'no') {
  let className = ''

  switch (width) {
    case 'small':
      className = 'py-4'
      break
    case 'medium':
      className = 'py-8'
      break
    case 'large':
      className = 'py-12'
      break
    case 'extra':
      className = 'py-28'
      break
    case 'no':
      className = ''
      break
  }

  return className.trim()
}
