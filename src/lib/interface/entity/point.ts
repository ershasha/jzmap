import * as cesium from 'cesium';
import { point } from '../../interface/entity/base';

export interface pointItem {
    /**
     * 唯一标识
     */
    readonly id: string;
    /**
     * 几何点的位置信息
     */
    readonly position: {
        input: number[],
        cartesian3: cesium.Cartesian3
    };
    /**
     * 几何点的渲染集合体
     */
    readonly entityCollection: cesium.EntityCollection;
    /**
     * 几何点entity实体类
     */
    readonly point: cesium.Entity | point ;
    /**
     * 将几何点添加到对应的entity集合中
     * @param entityCollection ：entity集合
     */
    addTo(entityCollection: cesium.EntityCollection): cesium.Entity;
    /**
     * 将几何点从渲染entity集合中移除
     */
    remove(): void;
    /**
     * 更新几何点的位置
     * @param position
     */
    updatePosition(position: number[]): void
}