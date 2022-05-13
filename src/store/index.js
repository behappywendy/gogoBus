import { createStore } from "vuex";
import Api from "@/services/Api.js";

export default createStore({
  state: {
    user: "wendy",
    title: "最新消息",
    latestNews: [],
    latitude: 0,
    longitude: 0,
    city: "Taipei",
    nearbyBusStop: [],
    cityOfRoute: [],
    realTimeData: [],
  },
  mutations: {
    getLatestInfo(state, latestNews) {
      state.latestNews = latestNews;
    },
    updateCurrentPosition(state, position) {
      console.log("經緯度");
      const { latitude, longitude } = position;
      state.latitude = latitude;
      state.longitude = longitude;
    },
    updateLocationCity(state, city) {
      state.city = city;
    },
    updateNearByBusStop(state, nearbyBus) {
      state.nearbyBusStop = nearbyBus;
    },
    updateCityOfRoute(state, allRouteData) {
      state.cityOfRoute = allRouteData;
    },
    updateRealTimeData(state, data) {
      state.realTimeData = data;
    },
  },
  actions: {
    async getCurrentPosition({ commit }) {
      const position = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(async function (position) {
          resolve(position);
        });
      });
      commit("updateCurrentPosition", {
        latitude: position.coords.latitude || 0,
        longitude: position.coords.longitude || 0,
      });
    },
    async getLatestInfoAPI({ commit, state }) {
      const latestNews = await Api.getBusNews(state.city);
      commit("getLatestInfo", latestNews.data);
    },
    async getNearByBusStop({ commit }, location) {
      const { latitude, longitude, distance } = location;
      const nearbyBusStop = await Api.getNearByBusStop(
        latitude,
        longitude,
        distance
      );
      commit("updateNearByBusStop", nearbyBusStop.data);
    },
    async getCityOfRoute({ commit }, city) {
      const allRouteData = await Api.getCityOfRoute(city);
      console.log("getCityOfRoute", allRouteData);
      commit("updateCityOfRoute", allRouteData.data);
    },
    async getRealTimeData({ commit }, selectedData) {
      const { selectedCity, selectedRoute } = selectedData;
      const response = await Api.getRealTimeData(selectedCity, selectedRoute);
      commit("updateRealTimeData", response.data);
    },
  },
  getters: {
    latestNewsData(state) {
      return state.latestNews;
    },
    latitude(state) {
      return state.latitude;
    },
    longitude(state) {
      return state.longitude;
    },
    city(state) {
      return state.city;
    },
    nearbyBusStop(state) {
      const nearbyBusStopData = state.nearbyBusStop.reduce(
        (nearbyBusStopData, currentValue) => {
          const nearbyBusStops = {};
          nearbyBusStops["stationName"] = currentValue.StationName.Zh_tw;
          nearbyBusStops["busStops"] = currentValue.Stops;
          nearbyBusStopData.push(nearbyBusStops);
          return nearbyBusStopData;
        },
        []
      );
      return nearbyBusStopData;
    },
    cityOfRoute(state) {
      return state.cityOfRoute;
    },
    realTimeData(state) {
      return state.realTimeData;
    },
  },
});
