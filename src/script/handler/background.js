/**
 * use the same config options as image block.
 * 背景图的处理，大小是否要设置？是否可以去除？
 */
import { addStyle, shapeStyle } from './styleCache'
import { CLASS_NAME_PREFEX } from '../config'
import { addClassName } from '../util'

function backgroundHandler(ele, { color, shape }) {
  const imageClass = CLASS_NAME_PREFEX + 'img'
  const shapeClass = CLASS_NAME_PREFEX + shape
  const rule = `{
    background: ${color} !important;
  }`
  
  addStyle(`.${imageClass}`, rule)

  shapeStyle(shape)

  addClassName(ele, [imageClass, shapeClass])
}

export default backgroundHandler
