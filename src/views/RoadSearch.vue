<template>
  <div class="content">
    <DestinationSearch></DestinationSearch>
    <div class="map">map</div>
    <Timetable></Timetable>
  </div>
</template>
<script>
import DestinationSearch from "@/components/Destination_search.vue";
import Timetable from "@/components/Timetable.vue";
export default {
  components: { DestinationSearch, Timetable },
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
  background: rgb(220, 147, 84);
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
