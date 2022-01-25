<template>
  <div class="search">
    <h2>where are you going</h2>
    <div class="select_city">
      <i class="fas fa-dot-circle fa-fw"></i>
      <select class="city">
        <option value="taipei">台北市</option>
        <option value="tainan">台南市</option>
        <option value="hsinchu">新竹市</option>
      </select>
    </div>
    <div class="select_route">
      <i class="fas fa-map-marker-alt fa-fw"></i>
      <select class="route">
        <option>262路線</option>
        <option>128路線</option>
        <option>300路線</option>
      </select>
    </div>
    <button>
      <span>搜尋</span> <img src="../assets/img/magnifier.png" alt="" />
    </button>
  </div>
</template>
<script>
export default {
  name: "destination_search",
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
