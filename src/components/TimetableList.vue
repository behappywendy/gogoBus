<template>
  <li class="timetableList">
    <div>
      <i class="fas fa-arrow-circle-down"></i>
      <p>{{ title }}</p>
    </div>
    <div>
      <p>{{ formateStatus }}</p>
      <p v-if="estimateTime <= 180">進站中</p>
      <p v-else>{{ formateEstimateTime }}</p>
    </div>
  </li>
</template>
<script>
export default {
  name: "TimetableList",
  props: ["title", "status", "estimateTime"],
  //小於3秒進佔中
  //車輛狀態備註 : [0:'正常',1:'尚未發車',2:'交管不停靠',3:'末班車已過',4:'今日未營運']
  computed: {
    formateStatus() {
      const statusMapping = {
        0: " ",
        1: "尚未發車",
        2: "交管不停靠",
        3: "末班車已過",
        4: "今日未營運",
      };
      return statusMapping[this.status];
    },
    formateEstimateTime() {
      return this.estimateTime
        ? Math.floor(this.estimateTime / 60) + "分鐘"
        : " ";
    },
  },
};
</script>
<style scoped lang="scss">
li {
  display: flex;
  padding: 13px 30px;

  > div {
    display: flex;
    flex: 1 0 0;
  }
  i {
    align-self: center;
    color: var(--primary);
    font-size: 16px;
  }
  & div:nth-child(1) {
    gap: 13px;
  }
  & div:nth-child(2) {
    gap: 40px;
  }
}
</style>
