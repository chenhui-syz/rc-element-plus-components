import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Container from "../components/container/src/index.vue";
// RouteRecordRaw:路由的类型

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/chooseIcon",
        // 路由懒加载
        component: () => import("../views/chooseIcon/index.vue"),
      },
      {
        path: "/form",
        // 路由懒加载
        component: () => import("../views/form/index.vue"),
      },
      {
        path: "/modalForm",
        // 路由懒加载
        component: () => import("../views/modalForm/index.vue"),
      },
      {
        path: "/table",
        // 路由懒加载
        component: () => import("../views/table/index.vue"),
      },
      {
        path: "/calendar",
        // 路由懒加载
        component: () => import("../views/calendar/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
