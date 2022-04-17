<template>
  <li>
    <p>{{ foramttedTime }}</p>
    <p>{{ title }}</p>
  </li>
</template>
<script>
export default {
  name: "LatesNewsList",
  props: ["time", "title"],
  computed: {
    foramttedTime() {
      return this.time.split("T")[0];
    },
  },
};
</script>
<style scoped lang="scss">
li {
  padding: 50px 70px 20px 70px;
  p:first-child {
    color: var(--primary);
  }
  p:last-child {
    color: var(--text-color-gary900);
  }
}
</style>
