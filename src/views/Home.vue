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
</style>
