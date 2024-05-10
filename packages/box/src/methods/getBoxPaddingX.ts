import BoxPadding from '../interfaces/BoxPadding'

export default function getBoxPaddingX(width: BoxPadding | 'no') {
  let className = "";

  switch (width) {
    case "small":
      className = 'px-4'
      break;
    case "medium":
      className = 'px-8'
      break;
    case "large":
      className = 'px-12'
      break;
    case "extra":
      className = 'px-28'
      break;
    case "no":
      className = ''
      break;
  }

  return className.trim();
}