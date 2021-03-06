import { emptyElement, removeElement, px2relativeUtil, setOpacity, addClassName } from '../util'
import { TRANSPARENT, CLASS_NAME_PREFEX } from '../config'
import { addStyle, shapeStyle } from './styleCache'

function svgHandler(ele, { color, shape }, cssUnit, decimal) {
  const { width, height } = ele.getBoundingClientRect()

  if (width === 0 || height === 0 || ele.getAttribute('aria-hidden') === 'true') {
    return removeElement(ele)
  }
  emptyElement(ele)

  const shapeClassName = CLASS_NAME_PREFEX + shape
  shapeStyle(shape)

  Object.assign(ele.style, {
    width: px2relativeUtil(width, cssUnit, decimal),
    height: px2relativeUtil(height, cssUnit, decimal),
  })

  addClassName(ele, [shapeClassName])

  if (color === TRANSPARENT) {
    setOpacity(ele)
  } else {
    const className = CLASS_NAME_PREFEX + 'svg'
    const rule = `{
      background: ${color} !important;
    }`
    addStyle(`.${className}`, rule)
    // 加类名
    ele.classList.add(className)
  }
}

export default svgHandler
