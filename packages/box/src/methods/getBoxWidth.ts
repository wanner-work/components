import BoxWidth from '../interfaces/BoxWidth'

export default function getBoxWidth(width: BoxWidth | 'no') {
  let className = ''

  switch (width) {
    case 'small':
      className = 'max-w-sm w-full'
      break
    case 'medium':
      className = 'max-w-md w-full'
      break
    case 'large':
      className = 'max-w-lg w-full'
      break
    case 'extra':
      className = 'max-w-xl w-full'
      break
    case 'full':
      className = 'w-full'
      break
    case 'content':
      className = 'max-w-[750px] w-full'
      break
    case 'no':
      className = ''
      break
  }

  return className.trim()
}
