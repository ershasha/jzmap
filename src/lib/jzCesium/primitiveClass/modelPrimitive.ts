import * as cesium from 'cesium';
import { v4 } from 'uuid';
import JzV from '../JZV/JzV';

export default class ModelPrimitive {
  modelParam: any;
  id: any;
  cartesains: cesium.Cartesian3
  model:cesium.Model;
  constructor(url: string, positions: number[], option?: any) {
    // 初始化
    option.id ? this.id = option.id : v4();
    // 转换经纬度
    this.cartesains = cesium.Cartesian3.fromDegrees(
      positions[0],
      positions[1],
      positions[2]
    );
    // 定义模型的坐标和大小
    let modelMatrix = cesium.Transforms.eastNorthUpToFixedFrame(
      this.cartesains
    );
    // 初始化参数
    this.modelParam = {
      url,
      modelMatrix: modelMatrix,
      scale: 1.0,
      minimumPixelSize:80,
      maximumScale:20000
    };
  }
  /**
   * 将模型加载到地球中
   * @param viewer 地球场景
   */
  addTo(viewer: JzV) {
    cesium.Model.fromGltfAsync(this.modelParam).then(e => {
      viewer.jzPrimitives.models.add(e);
      this.model = e;
    })
  }
}