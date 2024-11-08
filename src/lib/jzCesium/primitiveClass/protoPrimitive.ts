import * as cesium from 'cesium';
import BasePrimitive from './basePrimitive';
import * as mapUtils from '../../jzUtils/mapUtils';

export default class ProtoPrimitive extends BasePrimitive {
  outLine: any;
  keyPoints: any[] = [];
  type: string;
  protoParam: any;
  collectioin: any;

  constructor(positions: number[][], type: string = '', option?: any) {
    // 初始化
    super(positions);
    option && option.id ? this.id = option.id : null;
    this.type = type;
    // 初始化参数
    this.protoParam = {
      ...option,
    };
    // 初始化基元
    this.init(type);
  }

  init(type: string, material?: cesium.Material) {
    if (this.cartesains.length < 2) {
      console.warn("至少包含两个点");
      return;
    }
    // 先判断图元是否加载到了地球中
    if (this.primitive && !this.primitive.isDestroyed()) {
      this.primitive.destroy(); // 销毁渲染的图元
      this.primitive = null;
    }
    // 然后生成新的图元实例
    let instance = mapUtils.createInstance(this.cartesains, type, {});
    let appearance = material
      ? mapUtils.createAppearance(type, material)
      : mapUtils.createAppearance(type);
    this.primitive = mapUtils.createPrimitive(instance, appearance);
  }

}