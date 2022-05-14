<template>
  <p @click="show">currentRealTimeByFrequency</p>
  <!-- 如果currentRealTimeByFrequency沒有資料 -->
  <ol-map style="height: 100%">
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @zoomChanged="zoomChanged"
      @centerChanged="centerChanged"
      @resolutionChanged="resolutionChanged"
      @rotationChanged="rotationChanged"
    />
    <ol-tile-layer>
      <!-- 用哪一家地圖，想使用openStreetMap google map API key-->
      <ol-source-osm />
    </ol-tile-layer>
    <!--一個點ol-vector-layer -->
    <!-- <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point :coordinates="coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-icon :src="markerIcon" :scale="1"> </ol-style-icon>
            <ol-style-text text="位置"> </ol-style-text>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer> -->
    <ol-vector-layer
      v-for="(item, index) in currentRealTimeByFrequency"
      :key="index"
    >
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point
            :coordinates="[
              item?.BusPosition?.PositionLon || 121.517055,
              item?.BusPosition?.PositionLat || 25.047675,
            ]"
          ></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius" :scale="0.3">
              <ol-style-fill :color="color"></ol-style-fill>
              <ol-style-stroke color="white" :width="3"></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>

  <div>
    <p>center : {{ currentCenter }}</p>
    <p>zoom : {{ currentZoom }}</p>
    <p>resolution : {{ currentResolution }}</p>
    <p>rotation : {{ currentRotation }}</p>
  </div>
</template>
<script>
// api /RealTimeByFrequency/City/{City}
//路線名稱+position
// import { ref } from "vue";
import markerIcon from "@/assets/img/markerIcon.png";

export default {
  name: "BusMap",
  props: ["currentRealTimeByFrequency"],
  data() {
    return {
      center: [121.517055, 25.047675],
      projection: "EPSG:4326",
      zoom: 10,
      rotation: 0,
      coordinate: [120.3565767, 22.7250593],
      currentCenter: [120.3565767, 22.7250593],
      currentZoom: this.zoom,
      currentResolution: this.resolution,
      currentRotation: this.rotation,
      markerIcon: markerIcon,
      radius: 30,
      color: "rgba(72, 106, 232, 1)",
    };
  },
  methods: {
    zoomChanged(currentZoom) {
      this.currentZoom = currentZoom;
    },
    resolutionChanged(resolution) {
      this.currentResolution = resolution;
    },
    centerChanged(center) {
      this.currentCenter = center;
    },
    rotationChanged(rotation) {
      this.currentRotation = rotation;
    },
    show() {
      console.log("show", this.currentRealTimeByFrequency);
      if (this.currentRealTimeByFrequency) {
        console.log("有資料");
        const positionLon =
          this.currentRealTimeByFrequency[0]?.BusPosition.PositionLon ||
          121.517055;

        const positionLat =
          this.currentRealTimeByFrequency[0]?.BusPosition.PositionLat ||
          25.047675;
        this.center = [positionLon, positionLat];
        return;
      }
      console.log("沒有資料");
      this.center = [121.517055, 25.047675];
    },
  },
};
</script>
<style lang="scss" scoped></style>
