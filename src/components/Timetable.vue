<template>
  <div class="timetable">
    <DistanceButton>往公教住宅</DistanceButton>
    <DistanceButton>往中和</DistanceButton>
    <ul>
      <TimetableList></TimetableList>
      <TimetableList></TimetableList>
      <TimetableList></TimetableList>
      <TimetableList></TimetableList>
      <TimetableList></TimetableList>
    </ul>
  </div>
</template>
<script>
import DistanceButton from "@/components/Distance_button.vue";
import TimetableList from "@/components/TimetableList.vue";
export default {
  name: "Timetable",
  components: { DistanceButton, TimetableList },
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
