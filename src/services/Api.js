// Common JS 寫法 const axios = require('axios');
import axios from "axios";
import jsSHA from "jssha";
//ptx

const api = axios.create({
  baseURL: "https://ptx.transportdata.tw/",
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...getAuthorizationHeader(),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
function getAuthorizationHeader() {
  let AppID = "12efae2e62544e008e3edb1edfc82542";
  let AppKey = "SLIpweeVUHAwlA3-4jmwbHH0ryg";
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization: Authorization, "X-Date": GMTString };
}

export default {
  getCity(lon, lat) {
    return axios.get(
      `http://nominatim.openstreetmap.org/reverse?format=json&lon=${lon}&lat=${lat}`
    );
  },
  getBusNews(city) {
    return api.get(`MOTC/v2/Bus/News/City/${city}?%24top=30&%24format=JSON`);
  },
  getNearByBusStop(latitude = 0, longitude = 0, distance = 800) {
    console.log(latitude, longitude, distance);
    return api.get(`MOTC/v2/Bus/Station/NearBy`, {
      params: {
        $spatialFilter: `nearby(${latitude},${longitude},${distance})`,
        $format: "JSON",
      },
    });
  },
  getCityOfRoute(city) {
    return api.get(`MOTC/v2/Bus/Route/City/${city}?%24top=30&%24format=JSON`);
  },
  getRealTimeData(selectedCity, selectedRoute) {
    //預估到站資料批次更新
    console.log("vuex", selectedCity, selectedRoute);
    //ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/307?%24top=30&%24format=JSON
    return api.get(
      `MOTC/v2/Bus/EstimatedTimeOfArrival/City/${selectedCity}/${selectedRoute}?%24top=30&%24format=JSON`
    );
  },
};
