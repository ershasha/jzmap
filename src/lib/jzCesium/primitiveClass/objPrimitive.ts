import * as cesium from 'cesium';

import BasePrimitive from './basePrimitive';

export default class ObjPrimitive extends BasePrimitive {
  collection: any;
  protoParam: any;
  type: string;

  constructor(positions: number[], type: string = "point", option?: any) {
    // 初始化
    option && option.id ? super([positions], option.id) : super([positions]);

    // 缓存配置信息
    this.protoParam = {
      position: this.cartesains[0],
      id: this.id,
      ...option,
    };
    // 缓存对象信息
    this.type = type;
  }
  addTo(collection: any) {
    this.collection = collection;
    // 将原生添加到场景中
    this.primitive = this.collection.add(this.protoParam);
    return this;
  }
  remove() {
    this.collection.remove(this.primitive);
    this.collection = null;
    return this;
  }
  set color(val) {
    // 转换css颜色
    let cesiumColor = cesium.Color.fromCssColorString(val);
    switch (this.type) {
      case "point":
        this.primitive.color = cesiumColor;
        break;
      case "label":
        this.primitive.fillColor = cesiumColor;
        break;
      case "billboard":
        this.primitive.color = cesiumColor;
        break;
      default:
        console.error("设置失败！");
    }
  }
  get color() {
    switch (this.type) {
      case "point":
        return this.primitive.color.toCssColorString();
        break;
      case "label":
        return this.primitive.fillColor.toCssColorString();
        break;
      case "billboard":
        return this.primitive.color.toCssColorString();
      default:
        console.error("获取失败！");
    }
  }
}