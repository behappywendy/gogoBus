<template>
  <div class="content">
    <p>city{{ this.$store.state.city }}</p>
    <span>緯度{{ latitude }}</span>
    <span>經度{{ longitude }}</span>
    <div class="wrap_button">
      <DistanceButton class="primary" @click="clickDistanceButton"
        >800m</DistanceButton
      >
      <DistanceButton class="primary_light" @click="clickDistanceButton"
        >1000m</DistanceButton
      >
    </div>
    <div class="warp_card">
      <Card
        v-for="(busStop, index) in nearbyBusStop"
        :key="index"
        :title="busStop.stationName"
        :stops="busStop.busStops"
      ></Card>
    </div>
  </div>
</template>
<script>
import DistanceButton from "@/components/Distance_button.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    DistanceButton,
    Card,
  },
  async created() {
    await this.$store.dispatch("getCurrentPosition");
    await this.$store.dispatch("getNearByBusStop", {
      latitude: this.latitude,
      longitude: this.longitude,
      distance: 800,
    });
  },
  data() {
    return {};
  },
  computed: {
    latitude() {
      return this.$store.getters.latitude;
    },
    longitude() {
      return this.$store.getters.longitude;
    },
    nearbyBusStop() {
      return this.$store.getters.nearbyBusStop;
    },
  },
  methods: {
    async clickDistanceButton(e) {
      await this.$store.dispatch("getNearByBusStop", {
        latitude: this.latitude,
        longitude: this.longitude,
        distance: e.target.innerHTML.split("m")[0],
      });
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  background: var(--content_background);
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
.warp_card .bus_list:nth-child(odd) {
  background: var(--card_odd_background);
}
.warp_card .bus_list:nth-child(even) {
  background: var(--card_even_background);
}
</style>
