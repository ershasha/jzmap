<template>
  <div class="map" id="mapContainer">

  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

import jzmap from './lib/index';

onMounted(() => {
  let viewer = new jzmap.JzV('mapContainer');
  console.log(viewer);
})
</script>
<style scoped lang="scss">
.map {
  width: 100%;
  height: 100%;
}
</style>
