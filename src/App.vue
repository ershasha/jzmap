<template>
  <div class="map" id="mapContainer">

  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

import jzmap from './lib/index';

onMounted(() => {
  let viewer = new jzmap.JzV('mapContainer');

  let p = new jzmap.EPoint([112, 12, 0], { pixelSize: 30, color: 'red' });
  p.addTo(viewer.entities);
  p.color ='blue';
  p.outlineWidth = 2
  p.outlineColor = 'red'
  setTimeout(() => {
    p.updatePosition([100, 11, 0])
  }, 5000);
  console.log(viewer, p);
})
</script>
<style scoped lang="scss">
.map {
  width: 100%;
  height: 100%;
}
</style>
