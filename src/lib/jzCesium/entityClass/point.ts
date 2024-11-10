import * as cesium from 'cesium';

import { point } from '../../interface/entity/base';
import { BaseEntity } from '../../class/entity';

/**
 * @description: cesium中的entity点
 * @Author: songdengqiang
 * @Date: 2024-10-28 11:21:04
 */
export default class EPoint extends BaseEntity {

  constructor(position: number[], attr?: point) {
    super(position);
    // 初始化标识参数
    attr && attr.id ? this.id = attr.id : null;
    // 点的配置信息
    this.option = {
      position: this.position.cartesian3,
      id: this.id,
      point: {
        pixelSize: attr && attr.pixelSize ? attr.pixelSize : 1,
        show: attr && attr.pixelSize ? attr.pixelSize : true,
      },
    };
    // 补充相关配置信息
    if (!attr) return;
    attr.color ? this.option.point.color = cesium.Color.fromCssColorString(attr.color) : null;
    attr.outlineColor ? this.option.point.outlineColor = cesium.Color.fromCssColorString(attr.outlineColor) : null;
    attr.outlineWidth ? this.option.outlineWidth = attr.outlineWidth : null;
  }
  /**
   * 设置点的颜色
   */
  set color(color: string) {
    if (this.entity && this.entity.point && this.entity.point.color) {
      this.entity.point.color = cesium.Color.fromCssColorString(color);
    }
  }
  /**
 * 获取点的颜色
 */
  get color() {
    return this.entity ? this.entity.point.color.toCssColorString() : '';
  }
  /**
   * 设置点的外边线颜色
   */
  set outlineColor(color: string) {
    this.entity.point.outlineColor = cesium.Color.fromCssColorString(color);
  }
  /**
   * 获取点的外边线颜色
   */
  get outlineColor() {
    return this.entity && this.entity.point ? this.entity.point.outlineColor.toCssColorString() : '';
  }
  /**
 * 设置点的外边线宽度
 */
  set outlineWidth(num: number) {
    if (this.entity && this.entity.point) {
      this.entity.point.outlineWidth = num;
    }
  }
  /**
   * 获取点的外边线宽度
   */
  get outlineWidth() {
    return this.entity ? this.entity.point.outlineWidth : 1;
  }
  /**
 * 设置点的大小
 */
  set pixelSize(num: number) {
    if (this.entity && this.entity.point) {
      this.entity.point.pixelSize = num;
    }
  }
  /**
  * 获取点的大小
  */
  get pixelSize() {
    return this.entity ? this.entity.point.pixelSize : 1;
  }
}