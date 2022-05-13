<template>
  <div class="search">
    <h2>where are you going</h2>
    <div class="select_city">
      <i class="fas fa-dot-circle fa-fw"></i>
      <DropDown
        :options="cities"
        :selectedValue="selectedCity"
        @update:selectedValue="$emit('updated:selectedCity', $event)"
      ></DropDown>
    </div>
    <div class="select_route">
      <i class="fas fa-map-marker-alt fa-fw"></i>
      <DropDown
        :options="cityOfRouteList"
        :selectedValue="selectedCity"
        @update:selectedValue="$emit('updated:selectedRoute', $event)"
      ></DropDown>
    </div>
    <button @click="$emit('clickSearchButton')">
      <span>搜尋</span> <img src="../assets/img/magnifier.png" alt="" />
    </button>
  </div>
</template>
<script>
import DropDown from "@/components/DropDown.vue";
export default {
  name: "destination_search",
  components: {
    DropDown,
  },
  props: ["cities", "selectedCity", "cityOfRouteList"],
  emits: ["updated:selectedCity", "updated:selectedRoute", "clickSearchButton"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.search {
  background: var(--input-background);
  padding: 19px 30px;
  > * {
    margin-bottom: 30px;
  }
  i {
    color: var(--text-color-gary900);
    font-size: 20px;
    margin-right: 10px;
  }
  h2 {
    color: var(--text-color-gary900);
    font-size: 24px;
    font-weight: 700;
    font-family: sans-serif;
  }
}
@media (min-width: 992px) {
  .search {
    padding: 44px 33px;
  }
}
button {
  background: var(--primary);
  height: 41px;
  color: var(--input-background);
  border-radius: 32px;
  border: 0px;
  width: 260px;
  display: block;
  margin: 0 auto;
  font-size: 22px;
  > span {
    margin-right: 10px;
  }
}
</style>
