import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "公車首頁",
    },
  },
  {
    path: "/busInformation",
    name: "busInformation",
    component: () => import("../views/BusInformation.vue"),
    mata: {
      title: "附近站牌",
    },
  },
  {
    path: "/Search",
    name: "Search",
    component: () => import("../views/Search.vue"),
    mata: {
      title: "路線搜尋",
    },
  },
  {
    path: "/LatestNews",
    name: "LatestNews",
    component: () => import("../views/LatestNews.vue"),
    mata: {
      title: "最新消息",
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
