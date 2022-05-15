<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />

  <NavbarMobile></NavbarMobile>
  <Navbardesktop></Navbardesktop>
  <main>
    <div class="wrap_content">
      <ContentNav></ContentNav>
      <div>
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbardesktop from "@/components/Navbar_desktop.vue";
import NavbarMobile from "@/components/Navbar_mobile.vue";
import ContentNav from "@/components/Content_nav.vue";

export default {
  components: {
    Navbardesktop,
    NavbarMobile,
    ContentNav,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss">
@use "node_modules/bootstrap/scss/bootstrap.scss";

// * {
//   outline: 1px solid red;
// }

#app {
  background: var(--primary_background);
}
@media (min-width: 1200) {
  #app {
    height: 100vh;
  }
}
@media (min-width: 992px) {
  #app {
    display: flex;
  }
}
main {
  margin: 0 auto;
  // min-width: 400px;
  margin-top: 100px;
  background: var(--primary_background);
}
@media (min-width: 992px) {
  main {
    margin-top: 0px;
    min-width: 992px;
    min-height: 100vh;
    padding: 50px;
  }
}
.wrap_content {
  border-radius: 20px;
}
h2 {
  color: var(--text-color-gary900);
  font-size: 20px;
  font-weight: 700;
}
</style>
