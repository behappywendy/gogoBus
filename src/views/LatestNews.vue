<template>
  <div class="content">
    <h2>最新消息</h2>
    <ul>
      <LatesNewsList
        v-for="(NewsData, index) in latestNewsData"
        :key="index"
        :title="NewsData.Title"
        :time="NewsData.StartTime"
      ></LatesNewsList>
    </ul>
  </div>
  <main></main>
</template>
<script>
import LatesNewsList from "@/components/LatesNewsList.vue";
export default {
  components: {
    LatesNewsList,
  },
  async created() {
    await this.$store.dispatch("getLatestInfoAPI");
  },
  computed: {
    latestNewsData() {
      return this.$store.getters.latestNewsData;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  background: var(--content_background);
  border-radius: 16px;
  padding: 53px 75px;
}
h2 {
  color: var(--text-color-gary900);
  margin-bottom: 20px;
}
ul li:nth-child(odd) {
  background: var(--card_even_background);
}
ul li:nth-child(even) {
  background: var(--card_odd_background);
}
</style>
