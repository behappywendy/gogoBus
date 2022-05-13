<template>
  <nav class="navbar navbar-expand-lg">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-align-center"></i>
    </button>

    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }"
        ><img src="../assets/img/bus.png" alt="公車小圖示" />
        <p>GO GO Bus</p>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'nearbyStation' }"
              cltouter-linkss="nav-link active"
              aria-current="page"
              href="#"
              ><img src="../assets/img/map.png" alt="地圖小圖示"
            /></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'RoadSearch' }">
              <img src="../assets/img/magnifier.png" alt="放大鏡小圖示" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'LatestNews' }"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              ><img src="../assets/img/fluent_alert-24-filled.png" alt=""
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavbarMobile",
};
</script>
<style lang="scss" scoped>
// * {
//   border: 1px solid red;
// }
.navbar {
  background: var(--primary);
  > div {
    flex-basis: 80%;
  }

  .navbar-toggler {
    align-self: flex-start;
    margin: 15px auto;
    &:focus {
      box-shadow: none;
    }
  }
  .container-fluid {
    flex-direction: column;
    padding: 0;

    > a {
      display: inline-block;
      width: 142px;
      text-align: center;
    }
  }
}
@media (min-width: 992px) {
  .navbar {
    display: none;
  }
}
@media (min-width: 992px) {
  .navbar-toggler {
    align-self: flex-start;
  }
}
.navbar-nav {
  flex-direction: column;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav {
    flex-direction: column;
  }
}
ul {
  list-style-type: none;
  box-shadow: 3px 2px 6px rgba(121, 121, 121, 0.25);
}
li {
  width: 142px;
  text-align: center;
  padding: 30px 0px;
}

a {
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  &:hover {
    border-radius: 16px;
  }
}
button i {
  color: var(--content_background);
}

.navbar p {
  font-family: "Mochiy Pop P One", sans-serif;
  color: #fff;
}
</style>
