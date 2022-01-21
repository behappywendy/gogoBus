<template>
  <div class="bus_card">
    <p>板橋外站[向西]</p>
    <p>18 、18 、18 、18 、18 、18 、18 、18</p>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style scoped lang="scss">
.bus_card {
  margin-bottom: 30px;
  padding: 19px 24px;
}
.bus_card :first-child {
  margin-bottom: 8px;
  color: var(--primary);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
.bus_card :last-child {
  color: var(--text-color-gary900);
}
</style>
