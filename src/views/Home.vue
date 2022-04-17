<template>
  <h2>首頁</h2>
  <p>{{ name }}</p>
  <p>{{ title }}</p>
</template>

<script>
export default {
  name: "Home",
  components: {},

  data() {
    return {
      name: this.$store.state.user,
      title: this.$store.state.title,
    };
  },
};
</script>
<style scope lang="scss">
h2 {
  color: var(--content-nav);
}
// .content {
//   // background: var(--primary);
//   height: 800px;
//   p {
//     font-size: 21px;
//     font-weight: 900;
//     text-align: center;
//     color: #fff;
//   }
// }
</style>
