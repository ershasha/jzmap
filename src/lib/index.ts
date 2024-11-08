import * as cesium from 'cesium';

import jzCesium from './jzCesium/index';



const JzMap = {
  ...cesium,
  ...jzCesium,
};
export default JzMap;
