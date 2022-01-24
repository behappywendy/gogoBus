<template>
  <div class="content">
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
    <div class="map">map</div>
    <div class="timetable">3</div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.content {
  border-radius: 16px;
  display: grid;
  grid-gap: 42px;
  grid-template-rows: repeat(3, 300px);
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

.search {
  background: var(--input-background);
  padding: 44px 33px;
  > * {
    margin-bottom: 20px;
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
.map {
  background: rgb(220, 147, 84);
}
@media (min-width: 992px) {
  .map {
    grid-row: span 2;
  }
}
.timetable {
  background: pink;
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

// * {
//   outline: 1px solid red;
// }
</style>
