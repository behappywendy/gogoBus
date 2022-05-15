<template>
  <div class="bus_list">
    <h2>{{ title }}</h2>
    <div class="list_content">
      <span v-for="(stop, index) in stops" :key="index">
        {{ stop.RouteName.Zh_tw }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["title", "stops"],
};
</script>
//
<style scoped lang="scss">
.bus_list {
  h2 {
    margin-bottom: 8px;
  }
  margin-bottom: 30px;
  padding: 19px 24px;
  .list_content {
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 20px;
  }
  h2 {
    margin-bottom: 8px;
    color: var(--primary);
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
  span {
    color: var(--text-color-gary900);
  }
}
</style>
