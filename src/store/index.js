import { createStore } from "vuex";
import getApi from "@/services/Api.js";

export default createStore({
  state: {
    user: "wendy",
    title: "最新消息",
    latestNews: [],
  },
  mutations: {
    getLatestInfo(state, latestNews) {
      state.latestNews = latestNews;
    },
  },
  actions: {
    async getLatestInfoAPI({ commit }) {
      const latestNews = await getApi.getBusNews();
      commit("getLatestInfo", latestNews.data);
    },
  },
  getters: {
    latestNewsData(state) {
      console.log(state.latestNews);
      return state.latestNews;
    },
  },
});
