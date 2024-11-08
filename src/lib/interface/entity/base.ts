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