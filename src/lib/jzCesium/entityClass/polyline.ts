import * as cesium from 'cesium';

import { line } from '../../interface/entity/base';
import { BaseEntity } from '../../class/entity';

export default class Eline extends BaseEntity {

    constructor(positions: number[][], attr?: line) {
        // 将第一个点作为定位点
        super(positions[0]);
        // 初始化标识参数
        attr && attr.id ? this.id = attr.id : null;
        // 线的配置信息
        this.option = {
            position: this.position.cartesian3,
            id: this.id,
            polyline: {
                positions: positions.map(el => cesium.Cartesian3.fromDegrees(el[0], el[1], el[2] ? el[2] : 0));
            },
        };
        // 补充相关配置信息
        if (!attr) return;
    }
}