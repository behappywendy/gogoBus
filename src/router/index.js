import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  //   meta: {
  //     title: "公車首頁",
  //   },
  // },
  {
    path: "/",
    name: "nearbyStation",
    component: () => import("../views/nearbyStation.vue"),
    meta: {
      title: "附近站牌",
      en: "BUS STOP",
    },
  },
  {
    path: "/RoadSearch",
    name: "RoadSearch",
    component: () => import("../views/RoadSearch.vue"),
    meta: {
      title: "路線搜尋",
      en: "ROAD SEARCH",
    },
  },
  {
    path: "/LatestNews",
    name: "LatestNews",
    component: () => import("../views/LatestNews.vue"),
    meta: {
      title: "最新消息",
      en: "LATEST NEWS",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  /* 路由發生變化修改頁面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
