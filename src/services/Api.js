// Common JS 寫法 const axios = require('axios');
import axios from "axios";
import jsSHA from "jssha";

function getAuthorizationHeader() {
  let AppID = "e6255e8f381949979893ebd7eeb28fd3";
  let AppKey = "YaodqmvZElxe0xx214jQBiRDm34";
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

const touristAPI = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Bus/",
  withCredentials: false,
});

//instance為我們create的實體
touristAPI.interceptors.request.use(function (config) {
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...getAuthorizationHeader(),
  };
  return config;
});
export default {
  getBusNews() {
    return touristAPI.get("/News/City/Tainan?%24top=30&%24format=JSON");
  },
};
