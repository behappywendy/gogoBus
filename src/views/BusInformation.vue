<template>
  <div class="content">
    <div class="wrap_button">
      <DistanceButton class="primary">100m</DistanceButton>
      <DistanceButton class="primary_light">300m</DistanceButton>
    </div>
    <div class="warp_card">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>
<script>
import DistanceButton from "@/components/Distance_button.vue";
import Card from "@/components/Card.vue";
export default {
  components: { DistanceButton, Card },
};
</script>
<style scoped lang="scss">
.content {
  background: var(--content_background);
  border-radius: 20px;
}
.wrap_button :first-child {
  border-radius: 20px 0px 0px 0px;
}
.wrap_button :last-child {
  border-radius: 0px 20px 0px 0px;
}
.primary {
  background: var(--primary);
}
.primary_light {
  background: var(--primary-light);
}
.warp_card {
  padding: 30px;
}
.warp_card .bus_card:nth-child(odd) {
  background: var(--card_odd_background);
}
.warp_card .bus_card:nth-child(even) {
  background: var(--card_even_background);
}
</style>
