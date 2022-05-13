<template>
  <div>
    <input
      type="text"
      placeholder="快速搜尋"
      :value="searchText"
      @input="searchText = $event.target.value"
    />
    <nav><a href="#">BUS STOP</a>|<a href="#">附近站牌</a></nav>
  </div>
</template>
<script>
export default {
  name: "ContentNav",
  data() {
    return {
      searchText: "",
    };
  },
};
</script>
<style scoped lang="scss">
div {
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  color: var(--primary);
  flex-wrap: wrap;
  margin-bottom: 30px;
}

nav {
  font-weight: 700;
  font-size: 16px;
  flex-basis: 100%;
  a {
    text-decoration: none;
    color: var(--primary);
  }
}
@media (min-width: 992px) {
  nav {
    font-size: 26px;
    flex-basis: auto;
    order: -1;
    font-size: 16px;
  }
}
input {
  font-weight: 400;
  font-size: 12px;
  // width: 142px;
  width: 40%;
  height: 27px;
  border: none;
  box-shadow: 1px 1px 10px rgba(148, 148, 148, 0.25);
  padding: 0px 30px;
  margin-left: auto;
  border-radius: 16px;
}
@media (min-width: 992px) {
  input {
    margin-left: 0px;
    width: 311px;
    height: 49px;
  }
}
input::placeholder {
  text-align: center;
}
</style>
