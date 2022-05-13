<template>
  <div class="timetable">
    <DistanceButton @click="$emit('clickGoButton')"
      >往{{ departureStopNameZh }}</DistanceButton
    >
    <DistanceButton @click="$emit('clickBackButton')"
      >往{{ destinationStopNameZh }}</DistanceButton
    >
    <ul v-if="busTimetable.length ? true : false">
      <TimetableList
        v-for="item in busTimetable"
        :key="item.StopID"
        :title="item.StopName.Zh_tw"
        :estimateTime="item.EstimateTime"
        :status="item.StopStatus"
      ></TimetableList>
    </ul>
    <ul v-else>
      抱歉暫無資料
    </ul>
  </div>
</template>
<script>
import DistanceButton from "@/components/Distance_button.vue";
import TimetableList from "@/components/TimetableList.vue";
export default {
  name: "Timetable",
  components: { DistanceButton, TimetableList },
  props: ["departureStopNameZh", "destinationStopNameZh", "busTimetable"],
  emits: ["clickGoButton", "clickBackButton"],
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
.timetable {
  overflow: scroll;
}
.timetable button:first-child {
  background: var(--primary);
  border-radius: 16px 0px 0px 0px;
}
.timetable button:nth-child(2) {
  background: var(--primary-light);
  border-radius: 0px 16px 0px 0px;
}

ul li:nth-child(odd) {
  background: var(--timetable_li_odd);
}
ul li:nth-child(even) {
  background: var(--timetable_li_even);
}

// * {
//   outline: 1px solid red;
// }
</style>
