import EPoint from "../jzCesium/entityClass/point";

export type cameraOption = {
    lon: number,
    lat: number,
    alt?: number,
    entity?:any
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
     * 默认视角的位置信息
     * 
     * [lon,lat,alt,pitch,duration,head]:经度、纬度、高度、翻转角、飞跃时长、俯仰角
     */
    homePosition?: number[],
    /**
     * 回到默认的视角
     */
    flyToHome(): void
    /**
     * 定位到指定的视角
     * @param option 包括经度、纬度、高度、翻转角、飞跃时长，俯仰角
     */
    flyToPosition(option?:cameraOption):void
}