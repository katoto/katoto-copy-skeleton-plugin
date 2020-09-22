/**
 * a 标签去除无用数据
 */

function aHandler(ele) {
  //   去除a标签的属性 href title target 业务属性 骨架样式无需关注
  if (ele.hasAttribute("href")) ele.removeAttribute("href");
  if (ele.hasAttribute("title")) ele.removeAttribute("title");
  if (ele.hasAttribute("target")) ele.removeAttribute("target");
  if (ele.hasAttribute("type")) ele.removeAttribute("type");
  if (ele.hasAttribute("download")) ele.removeAttribute("download");
  if (ele.hasAttribute("name")) ele.removeAttribute("name");
  if (ele.hasAttribute("rel")) ele.removeAttribute("rel");
  if (ele.hasAttribute("media")) ele.removeAttribute("media");
  console.log(ele)
}

export default aHandler;
