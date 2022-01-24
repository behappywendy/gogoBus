<template>
  <ul class="nav flex-column">
    <li>
      <router-link
        class="nav-link active"
        aria-current="page"
        :to="{ name: 'Home' }"
        ><img src="../assets/img/bus.png" alt="公車小圖示" />
        <p>GO GO Bus</p></router-link
      >
    </li>
    <li>
      <router-link class="nav-link" href="#" :to="{ name: 'busInformation' }"
        ><img src="../assets/img/map.png" alt="地圖小圖示"
      /></router-link>
    </li>
    <li>
      <router-link class="nav-link" href="#" :to="{ name: 'RoadSearch' }"
        ><img src="../assets/img/magnifier.png" alt="放大鏡小圖示"
      /></router-link>
    </li>
    <li>
      <router-link :to="{ name: 'LatestNews' }" class="nav-link">
        <img
          src="../assets/img/fluent_alert-24-filled.png"
          alt="最新消息小圖示"
      /></router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Navbardesktop",
};
</script>
<style lang="scss" scoped>
// * {
//   outline: 1px solid red;
// }
.nav {
  background: var(--primary);
  display: none;
  text-align: center;
  height: 900px;
  border-radius: 10px;
  li {
    width: 142px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "Mochiy Pop P One", sans-serif;
    color: #fff;
    margin: 0;
  }
  .nav-link {
    display: inline-block;
    padding: 10px;
    &:hover {
      background: var(--hoverButton);
      border-radius: 10px;
    }
  }
}
@media (min-width: 992px) {
  .nav {
    display: block;
  }
}
</style>
