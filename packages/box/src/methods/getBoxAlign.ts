import BoxAlign from '../interfaces/BoxAlign'

export default function getBoxAlign(align: BoxAlign | 'no') {
  let className = ''

  switch (align) {
    case 'left':
      className = 'mr-auto'
      break
    case 'center':
      className = 'mx-auto'
      break
    case 'right':
      className = 'ml-auto'
      break
  }

  return className.trim()
}
