<template>
  <ul class="nav flex-column">
    <li @click="clickDarkMode">
      <a class="nav-link" href="#">
        <img src="../assets/img/bus.png" alt="公車小圖示" />
        <p>GO GO Bus</p>
      </a>
    </li>
    <li>
      <router-link class="nav-link" href="#" :to="{ name: 'nearbyStation' }"
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
    <li><a-switch v-model:checked="checked" /></li>
  </ul>
</template>
<script>
import { ref, watch } from "vue";
export default {
  name: "Navbardesktop",
  setup() {
    const checked = ref(false);
    function clickDarkMode() {
      const body = document.querySelector("html");
      body.classList.toggle("dark");
    }
    watch(checked, () => {
      clickDarkMode();
    });
    return {
      checked,
    };
  },
};
</script>
<style lang="scss" scoped>
.nav {
  background: var(--primary);
  display: none;
  text-align: center;
  border-radius: 10px;
  li {
    width: 142px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    display: inline-block;
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
