import * as cesium from 'cesium';

import EPoint from '../entityClass/point';



export default class JzV extends cesium.Viewer {
  // 类的静态变量，初始位置
  static hometoPositionEntity: EPoint;

  jzPrimitives: any = {};// 自定义基元的集合
  _homePosition: number[] = [113, 32, 8000000, -90, 3, 0];//相机的初始位置


  constructor(dom: string) {
    //cesium初始化配置
    let propOptions = {
      selectionIndicator: false,
      timeline: false, //时间轴控件
      animation: false, //时间轴
      homeButton: false, //回到首页的按钮
      sceneModePicker: false, //场景模型的选取
      navigationHelpButton: false, // 导航按钮
      baseLayerPicker: false, // 图层选择器
      geocoder: false, // 位置查找工具
      fullscreenButton: false, // 全屏按钮
      baseLayer: cesium.ImageryLayer.fromProviderAsync(cesium.SingleTileImageryProvider.fromUrl(new URL('../../assets/img/default.jpg', import.meta.url).href), {}), // 自定义基础图层
    };
    super(dom, propOptions);
    /**
     * 抑制鼠标的默认选取事件（单击和双击）
     */
    this.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      cesium.ScreenSpaceEventType.LEFT_CLICK
    );
    this.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );

    // 设置基础几何基元，点，标签、图标、模型、线、面
    this.jzPrimitives = {
      points: mapUtils.createPrimitiveCollection('point', this.scene.primitives),
      labels: mapUtils.createPrimitiveCollection('label', this.scene.primitives),
      billboards: mapUtils.createPrimitiveCollection('billboard', this.scene.primitives),
      models: mapUtils.createPrimitiveCollection('model', this.scene.primitives),
      lines: mapUtils.createPrimitiveCollection('line', this.scene.primitives),
      areas: mapUtils.createPrimitiveCollection('area', this.scene.primitives)
    };
    // 设置定位元素,并进行渲染
    let ep = new EPoint([this._homePosition[0], this._homePosition[1]], { pixelSize: 0.1, color: 'white' });

    JzV.hometoPositionEntity = ep;
    ep.addTo(this.entities);
    console.log(ep);
    this.flyToHome();
    // 隐藏cesium商标
    this.creditDisplay.container.style.display = "None";
  }
  /**
   * 定位到相机初始位置
   * @param pitch 相机偏角
   * @param duration 动画时长
   * @param head 相机仰角
   */
  flyToHome(pitch?: number, duration?: number, head?: number) { // 确保定位entity点在地球表面，即可使得定位经度和纬度在视角中心
    this.flyTo(JzV.hometoPositionEntity.point, {
      duration: duration ? duration : this._homePosition[4],
      offset: new cesium.HeadingPitchRange(
        head ? head : this._homePosition[5],
        cesium.Math.toRadians(pitch ? pitch : this._homePosition[3]),
        this._homePosition[2]
      ),
    })
  }


  /***************************************************动态设置相关参数 */
  set homePosition(val) {
    // 替换缓存中的变量
    val.forEach((el, index) => {
      this._homePosition[index] = el;
    })
    // 重新定位
    JzV.hometoPositionEntity.updataPosition([this._homePosition[0], this._homePosition[1]])
    this.flyToHome();
  }
  get homePosition() {
    return this._homePosition;
  }
}

