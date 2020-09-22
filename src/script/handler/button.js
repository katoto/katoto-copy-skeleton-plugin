/**
 * [buttonHandler 改变 button 元素样式：包括去除 border和 box-shadow, 背景色和文字颜色统一]
 */
import { addStyle } from "./styleCache";
import { CLASS_NAME_PREFEX } from "../config";

function buttonHandler(ele, { color, excludes }) {
  if (excludes.indexOf(ele) > -1) return false;
  const classname = CLASS_NAME_PREFEX + "btn";
  const rule = `{
    color: ${color} !important;
    background: ${color} !important;
    border: none !important;
    box-shadow: none !important;
  }`;
  addStyle(`.${classname}`, rule);
  ele.classList.add(classname);
  //   去除按钮 type value disabled 业务属性 骨架样式无需关注
  if (ele.hasAttribute("type")) ele.removeAttribute("type");
  if (ele.hasAttribute("value")) ele.removeAttribute("value");
  if (ele.hasAttribute("disabled")) ele.removeAttribute("disabled");
}

export default buttonHandler;
