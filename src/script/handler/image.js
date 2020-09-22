import { SMALLEST_BASE64 as src, CLASS_NAME_PREFEX } from "../config";
import { getOppositeShape, setAttributes, addClassName } from "../util";
import { addStyle, shapeStyle } from "./styleCache";

function imgHandler(ele, { color, shape, shapeOpposite }) {
  const { width, height } = ele.getBoundingClientRect();
  const attrs = {
    width,
    height,
    src
  };

  const finalShape =
    shapeOpposite.indexOf(ele) > -1 ? getOppositeShape(shape) : shape;

  setAttributes(ele, attrs);

  const className = CLASS_NAME_PREFEX + "img";
  const shapeName = CLASS_NAME_PREFEX + finalShape;
  const rule = `{
    background: ${color} !important;
  }`;
  addStyle(`.${className}`, rule);
  shapeStyle(finalShape);

  addClassName(ele, [className, shapeName]);

  if (ele.hasAttribute("alt")) {
    ele.removeAttribute("alt");
  }
  //   去除img resize align border vspac hspace 业务属性 骨架样式无需关注
  if (ele.hasAttribute("resize")) ele.removeAttribute("resize");
  if (ele.hasAttribute("hspace")) ele.removeAttribute("hspace");
  if (ele.hasAttribute("vspace")) ele.removeAttribute("vspace");
}

export default imgHandler;
