import * as cesium from 'cesium';
import { v4 } from 'uuid';

export default class BasePrimitive {
  primitive: cesium.Primitive | any;
  id: any;
  cartesains: cesium.Cartesian3[];

  constructor(positions: number[][], option?: any) {
    // 初始化参数
    this.id = option && option.id ? option.id : v4();
    // 初始化位置信息
    this.cartesains = positions.map(el => {
      return cesium.Cartesian3.fromDegrees(el[0], el[1], el[2] ? el[2] : 0);
    })
    this.primitive = null;
  }
  update(frameState:any) {
    // 若基元存在则更新基元
    this.primitive && this.primitive.update(frameState);
  }
  destroy() {
    // 销毁基元信息
    this.primitive && !this.primitive.isDestroyed() && this.primitive.destroy();
    this.primitive = null;
  }
  /*************************************** 动态设置参数 */
  set show(val) {
    this.primitive && (this.primitive.show = val);
  }
  get show() {
    return this.primitive && this.primitive.show;
  }
}