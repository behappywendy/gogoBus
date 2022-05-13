<template>
  <div class="map">
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 100%"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-map>
  </div>
</template>
<script>
// api /RealTimeByFrequency/City/{City}
//路線名稱+position
export default {
  name: "map",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
