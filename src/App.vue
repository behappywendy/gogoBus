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
  components: { Navbardesktop, NavbarMobile, ContentNav },
  data() {
    return {
      userTheme: "light-theme",
    };
  },
  async created() {
    // await this.$store.dispatch("getCurrentPosition");
    // await Api.getUserCity();
  },
};
</script>

<style lang="scss">
@use "node_modules/bootstrap/scss/bootstrap.scss";

* {
  padding: 0;
  margin: 0;
}

#app {
  background: var(--primary_background);
  min-width: 358px;
  height: 100vh;
}
@media (min-width: 992px) {
  #app {
    display: flex;
  }
}
main {
  padding: 50px;
  margin: 0 auto;
  min-width: 300px;
}
@media (min-width: 992px) {
  main {
    width: 992px;
  }
}
h2 {
  color: var(--text-color-gary900);
  font-size: 20px;
  font-weight: 700;
}

// * {
//   outline: 1px solid red;
// }
</style>
