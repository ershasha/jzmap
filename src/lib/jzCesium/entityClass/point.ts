import * as cesium from 'cesium';
import { v4 } from "uuid";
// import {entityAttr} from '../../type/entityAttr'
import { epoint, epointInterFace } from '../../type/entity/point'

/**
 * @description: cesium中的entity点
 * @Author: songdengqiang
 * @Date: 2024-10-28 11:21:04
 */
export default class EPoint implements epointInterFace {
  id: string;
  position: { input: number[]; cartesian3: cesium.Cartesian3; };
  entityCollection?: cesium.EntityCollection | undefined;
  point: any;
  constructor(positions: number[], attr?: epoint) {
    this.id = v4();
    // 初始化参数
    this.position = {
      input: positions,
      cartesian3: cesium.Cartesian3.fromDegrees(positions[0],
        positions[1],
        positions[2] ? positions[2] : 0)
    }
    // 点的配置信息
    this.point = {
      position: this.position.cartesian3,
      id: this.id,
      point: {
        pixelSize: attr && attr.pixelSize ? attr.pixelSize : 1,
        show: attr && attr.pixelSize ? attr.pixelSize : true,
      },
    };
    // 补充相关配置信息
    attr && attr.color ? this.point.point.color = cesium.Color.fromCssColorString(attr.color) : null;
    attr && attr.outlineColor ? this.point.point.outlineColor = cesium.Color.fromCssColorString(attr.outlineColor) : null;
  }
  /**
   * 将点对象进行渲染
   * @param entityCollection 用于管理点的entity集合
   * @returns PointGraphics 返回新增的entity点
   */
  addTo(entityCollection: cesium.EntityCollection) {
    this.entityCollection = entityCollection;
    this.point = entityCollection.add(this.point);
    return this.point;
  }
  /**
   * 移除点对象的渲染
   */
  remove() {
    this.entityCollection && this.entityCollection.remove(this.point);
  }
  /**
   * 更新entity点的位置
   * @param position 新的位置信息
   */
  updatePosition(position: number[]) {
    // 修改缓存数据
    this.position.input = position;
    this.position.cartesian3 = cesium.Cartesian3.fromDegrees(position[0],
      position[1],
      position[2] ? position[2] : 0);
    // 修改数据的位置
    this.point.position = this.position.cartesian3;
  }
}