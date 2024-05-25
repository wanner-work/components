import { HTMLProps, ReactNode } from 'react'
import BoxWidth from '../interfaces/BoxWidth'
import getBoxWidth from '../methods/getBoxWidth'
import BoxPadding from '../interfaces/BoxPadding'
import getBoxPaddingX from '../methods/getBoxPaddingX'
import getBoxPaddingY from '../methods/getBoxPaddingY'
import BoxAlign from '../interfaces/BoxAlign'
import getBoxAlign from '../methods/getBoxAlign'

interface Props extends HTMLProps<HTMLDivElement> {
  width?: BoxWidth | 'no'
  px?: BoxPadding | 'no'
  py?: BoxPadding | 'no'
  align?: BoxAlign | 'no'
  children?: ReactNode | ReactNode[]
}

export default function Box({
  width = 'no',
  px = 'no',
  py = 'no',
  align = 'no',
  children,
  className,
  ...props
}: Props) {
  let widthClasses = getBoxWidth(width)
  let paddingXClasses = getBoxPaddingX(px)
  let paddingYClasses = getBoxPaddingY(py)
  let alignClasses = getBoxAlign(align)

  const classNames = [widthClasses, paddingXClasses, paddingYClasses, alignClasses, className].filter(Boolean).join(' ').trim()

  return (
    <div
      className={classNames}
      {...props}
    >
      {children}
    </div>
  )
}
