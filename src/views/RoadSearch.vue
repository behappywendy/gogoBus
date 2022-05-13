<template>
  <div class="content">
    <DestinationSearch
      :cities="cities"
      :cityOfRouteList="cityOfRouteList"
      :selectedCity="selectedCity"
      @updated:selectedCity="selectedCity = $event"
      @updated:selectedRoute="selectedRoute = $event"
      @clickSearchButton="clickSearchButton"
    ></DestinationSearch>
    <Map></Map>
    <Timetable
      @clickBackButton="back"
      @clickGoButton="go"
      :departureStopNameZh="busTerminus.DepartureStopNameZh"
      :destinationStopNameZh="busTerminus.DestinationStopNameZh"
      :currentRoutesData="currentRoutesData"
      :busTimetable="busTimetable"
    ></Timetable>
  </div>
</template>
<script>
import cities from "@/assets/data/city.json";
import DestinationSearch from "@/components/Destination_search.vue";
import Timetable from "@/components/Timetable.vue";
// import Api from "@/services/Api.js";
import Map from "@/components/Map.vue";
export default {
  components: {
    DestinationSearch,
    Timetable,
    Map,
  },
  props: [],
  async created() {
    await this.$store.dispatch("getCurrentPosition");
    await this.$store.dispatch("getCityOfRoute", this.selectedCity || "Taipei");
  },
  data() {
    return {
      selectedCity: "Taipei",
      selectedRoute: "234 ",
      busTimetable: [],
    };
  },
  methods: {
    clickSearchButton() {
      this.$store.dispatch("getRealTimeData", {
        selectedCity: this.selectedCity,
        selectedRoute: this.selectedRoute,
      });
      this.go();
    },
    go() {
      const result =
        this.realTimeData.filter((item) => {
          return item.Direction === 0;
        }) ?? [];
      this.busTimetable = result;
    },
    back() {
      const result =
        this.realTimeData.filter((item) => {
          return item.Direction === 1;
        }) ?? [];
      this.busTimetable = result;
    },
  },
  computed: {
    cities() {
      return cities.map((city) => ({
        label: city.CityName,
        value: city.City,
      }));
    },
    latitude() {
      return this.$store.getters.latitude;
    },
    longitude() {
      return this.$store.getters.longitude;
    },
    cityOfRouteList() {
      return this.$store.getters.cityOfRoute.map((item) => ({
        label: item.RouteName.Zh_tw,
        value: item.RouteName.Zh_tw,
      }));
    },
    realTimeData() {
      return this.$store.getters.realTimeData;
    },
    currentRoutesData() {
      //會根據點選資料
      //find路線
      //起始站-終點站
      return (
        this.$store.getters.cityOfRoute.filter((item) => {
          return item.RouteName.Zh_tw === this.selectedRoute;
        }) ?? []
      );
    },
    busTerminus() {
      const result =
        this.$store.getters.cityOfRoute.find((item) => {
          return item.RouteName.Zh_tw === this.selectedRoute;
        }) ?? {};
      const { DepartureStopNameZh, DestinationStopNameZh } = { ...result };
      return { DepartureStopNameZh, DestinationStopNameZh };
    },
  },
  watch: {
    selectedCity: async function (selectedCity) {
      this.$store.dispatch("getCityOfRoute", selectedCity || "Taipei");
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  border-radius: 16px;
  display: grid;
  grid-gap: 42px;
  grid-template-rows: repeat(2, 300px);
  > div {
    border-radius: 16px;
  }
}

@media (min-width: 992px) {
  .content {
    grid-gap: 28px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 300px);
  }
}

.map {
  background: rgb(243, 227, 213);
}
@media (min-width: 992px) {
  .map {
    grid-row: span 2;
  }
}
.timetable {
  background: var(--input-background);
}
</style>
