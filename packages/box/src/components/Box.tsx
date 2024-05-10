import { HTMLProps, ReactNode } from 'react'
import BoxWidth from '../interfaces/BoxWidth'
import getBoxWidth from '../methods/getBoxWidth'
import BoxPadding from '../interfaces/BoxPadding'
import getBoxPaddingX from '../methods/getBoxPaddingX'
import getBoxPaddingY from '../methods/getBoxPaddingY'

interface Props extends HTMLProps<HTMLDivElement> {
  width?: BoxWidth | 'no'
  px?: BoxPadding | 'no'
  py?: BoxPadding | 'no'
  children?: ReactNode | ReactNode[]
}

export default function Box({
  width = 'no',
  px = 'no',
  py = 'no',
  children,
  className,
  ...props
}: Props) {
  let widthClasses = getBoxWidth(width)
  let paddingXClasses = getBoxPaddingX(px)
  let paddingYClasses = getBoxPaddingY(py)

  return (
    <div
      className={`${widthClasses} ${paddingXClasses} ${paddingYClasses} ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </div>
  )
}
