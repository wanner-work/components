import BoxWidth from '../interfaces/BoxWidth'

export default function getBoxWidth(width: BoxWidth | 'no') {
  let className = ''

  switch (width) {
    case 'small':
      className = 'max-w-[500px] w-full'
      break
    case 'medium':
      className = 'max-w-[800px] w-full'
      break
    case 'large':
      className = 'max-w-[1100px] w-full'
      break
    case 'extra':
      className = 'max-w-[1300px] w-full'
      break
    case 'full':
      className = 'w-full'
      break
    case 'content-small':
      className = 'max-w-[600px] w-full'
      break
    case 'content':
      className = 'max-w-[650px] w-full'
      break
    case 'content-large':
      className = 'max-w-[700px] w-full'
      break
    case 'no':
      className = ''
      break
  }

  return className.trim()
}
