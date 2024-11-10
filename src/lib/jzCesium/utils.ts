import * as cesium from 'cesium';
import { v4 } from 'uuid';
import { materialAttr } from '../interface/entity/base'

export function createPrimitiveCollection(name: string, primitives: cesium.PrimitiveCollection) {
    let collection;
    switch (name) {
        case "point":
            collection = new cesium.PointPrimitiveCollection();
            break;
        case "label":
            collection = new cesium.LabelCollection();
            break;
        case "billboard":
            collection = new cesium.BillboardCollection();
            break;
        default:
            collection = new cesium.PrimitiveCollection();
    }
    // 将元素集合加入到指定的primitives中
    primitives.add(collection);
    return collection;
}

export function createInstance(positions: cesium.Cartesian3[], type: string, { id = v4(), r = 100000 }) {
    let geometry: any;
    //创建几何
    switch (type) {
        case "polyline":
            geometry = new cesium.PolylineGeometry({
                positions: positions,
            });
            break;
        case "polygon":
            geometry = new cesium.PolygonGeometry({
                polygonHierarchy: new cesium.PolygonHierarchy(positions),
            });
            break;
        case "circle":
            geometry = new cesium.CircleGeometry({
                center: positions[0],
                radius: r,
            });
            break;
    }
    let instance = new cesium.GeometryInstance({
        geometry: geometry,
        id,
    });
    return instance;
}

export function createAppearance(
    type: string,
    material: cesium.Material = cesium.Material.fromType("Color", { translucent: false })
) {
    let appearance = null;
    switch (type) {
        // 线段的材料是单独的
        case "polyline":
            appearance = new cesium.PolylineMaterialAppearance({
                material,
            });
            break;
        default:
            appearance = new cesium.MaterialAppearance({
                material,
            });
    }
    return appearance;
}
export function createLineMaterial(type: string, options?: materialAttr) {
    let material;
    switch (type) {
        case "color":
            material = new cesium.PolylineMaterialAppearance();
            break;
        case 'dashed':
            material = new cesium.PolylineDashMaterialProperty();
            break;
    }
    if(!options) return material;
    
     return material;
}

export function createPrimitive(instance: cesium.GeometryInstance, appearance: cesium.Appearance) {
    return new cesium.Primitive({
        geometryInstances: instance, // 几何
        appearance: appearance, // 外观
    });
}