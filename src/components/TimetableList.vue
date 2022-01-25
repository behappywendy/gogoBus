<template>
  <li class="timetableList">
    <div>
      <i class="fas fa-arrow-circle-down"></i>
      <p>中和保養</p>
    </div>
    <div>
      <p>未發車</p>
      <p>FAA-073</p>
    </div>
  </li>
</template>
<script>
export default {
  name: "TimetableList",
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
