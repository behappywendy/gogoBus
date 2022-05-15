<template>
  <div class="content">
    <h2>最新消息</h2>
    <div class="loading" v-if="isLoading"></div>
    <ul v-else>
      <LatesNewsList
        v-for="(NewsData, index) in latestNewsData"
        :key="index"
        :title="NewsData.Title"
        :time="NewsData.StartTime"
      ></LatesNewsList>
    </ul>
  </div>
</template>
<script>
import LatesNewsList from "@/components/LatesNewsList.vue";
export default {
  components: {
    LatesNewsList,
  },
  async created() {
    await this.$store.dispatch("getLatestInfoAPI");
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: true,
    };
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
  max-height: 800px;
  overflow: auto;
}
h2 {
  color: var(--text-color-gary900);
  margin-bottom: 20px;
}
ul li {
  &:nth-child(odd) {
    background: var(--card_even_background);
  }
  &:nth-child(even) {
    background: var(--card_odd_background);
  }
}
.loading {
  height: 300px;
  @extend %loading;
}
</style>
