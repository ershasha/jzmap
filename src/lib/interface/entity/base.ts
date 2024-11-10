export type baseAttr = {
  /**
   * 实体被选取时的内容
   */
  id?: any,
  /**
 * 几何元素是否展示，默认值 true
 */
  show?: boolean,
}

export type point = baseAttr & {
  /**
  * 颜色，默认值Color.WHITE
  */
  color?: string,
  /**
   * 外边框颜色，默认值Color.BLACK
   */
  outlineColor?: string,
  /**
   * 外边框宽度，默认值 0
   */
  outlineWidth?: number,
  /**
   * 元素的像素大小，默认值 1
   */
  pixelSize?: number,
}

export type line = baseAttr & {
  /**
  * 颜色，默认值Color.WHITE
  */
  color?: string,
  /**
   * 外边框颜色，默认值Color.BLACK
   */
  width?: string,
  /**
   * 线的样式,直线、虚线、动态线...
   */
  type?: string
}

export type materialAttr = {
  /**
   * 材料颜色
   */
  color?: string,
  /**
   * 材料虚线间隔的长度
   */
  dashLength?: number,
  /**
   * 材料虚线间隔的颜色
   */
  gapColor?: number,
}