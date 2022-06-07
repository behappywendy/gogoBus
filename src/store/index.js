import { createStore } from "vuex";
import Api from "@/services/Api.js";
import cities from "@/assets/data/city.json";
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
    estimatedTime: [],
    realTimeByFrequency: [],
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
    updateEstimatedTime(state, data) {
      state.estimatedTime = data;
    },
    updateRealTimeByFrequency(state, data) {
      state.realTimeByFrequency = data;
    },
  },
  actions: {
    async getCity({ state }) {
      const getLocationCity = await Api.getCity(
        state.latitude,
        state.longitude
      );
      const result = cities.find((city) => {
        return city.CityName == getLocationCity.data.address.city;
      });

      state.city = result.City ?? "Taipei";
    },
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
      console.log(state.city);
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
      console.log(nearbyBusStop);
      commit("updateNearByBusStop", nearbyBusStop.data);
    },
    async getCityOfRoute({ commit }, city) {
      const allRouteData = await Api.getCityOfRoute(city);
      console.log("getCityOfRoute", allRouteData);
      commit("updateCityOfRoute", allRouteData.data);
    },
    //剩幾分鐘到
    async getEstimatedTime({ commit }, selectedData) {
      const { selectedCity, selectedRoute } = selectedData;
      const response = await Api.getEstimatedTime(selectedCity, selectedRoute);
      commit("updateEstimatedTime", response.data);
    },
    async getRealTimeByFrequency({ commit }, selectedData) {
      const { selectedCity, selectedRoute } = selectedData;
      const response = await Api.realTimeByFrequency(
        selectedCity,
        selectedRoute
      );
      commit("updateRealTimeByFrequency", response.data);
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
    estimatedTime(state) {
      return state.estimatedTime;
    },
    realTimeByFrequency(state) {
      return state.realTimeByFrequency;
    },
  },
});
