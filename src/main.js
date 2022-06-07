import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";
import { Switch } from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'

createApp(App)
  .use(store)
  .use(router)
  .use(OpenLayersMap)
  .use(Switch)
  .mount("#app");

// document.title = "公車首頁 ";
