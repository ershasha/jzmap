import EPoint from "../jzCesium/entityClass/point";

type cameraOption = {
    lon: number,
    lat: number,
    alt?: number,
    /**
     * 翻转角
     */
    pitch?: number,
    duration?: number,
    /**
     * 俯仰角
     */
    head?: number
}


export default interface viewer {
    /**
     * 自定义的基础基元对象
     */
    jzPrimitives: object,
    /**
     * 用于定位默认视角的几何实体
     */
    homePositionEntity: EPoint,
    /**
     * 默认视角的位置信息
     * 
     * [lon,lat,alt,pitch,duration,head]:经度、纬度、高度、翻转角、飞跃时长、俯仰角
     */
    homePosition: number[],
    /**
     * 回到默认的视角
     */
    flyToHome(): void
    flyToPosition(option:cameraOption):void
}