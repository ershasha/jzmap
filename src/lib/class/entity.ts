import * as cesium from 'cesium';
import { v4 } from "uuid";

export class BaseEntity {
    /**
     * 唯一标识
     */
    id: string = v4();
    /**
     * 元素的定位点
     */
    readonly position!: {
        input: number[],
        cartesian3: cesium.Cartesian3
    };
    /**
     * 几何的地球渲染集合
     */
    entityCollection!: cesium.EntityCollection;
    /**
     * 几何的参数信息或几何体的实体类
     */
    entity!: cesium.Entity;

    protected option!: any;

    constructor(_position: number[]) {
        // 初始化定位信息
        this.position = {
            input: _position,
            cartesian3: cesium.Cartesian3.fromDegrees(_position[0],
                _position[1],
                _position[2] ? _position[2] : 0)
        }
    }
    /**
     * 将对象进行渲染
     * @param _entityCollection 用于管理点的entity集合
     * @returns PointGraphics 返回新增的entity点
     */
    addTo(_entityCollection: cesium.EntityCollection) {
        this.entityCollection = _entityCollection;
        this.entity = this.entityCollection.add(this.option);
        return this.entity;
    }
    /**
   * 移除对象的渲染
   */
    remove() {
        this.entityCollection && this.entityCollection.remove(this.entity);
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
        this.entity.position = this.position.cartesian3;
    }
}