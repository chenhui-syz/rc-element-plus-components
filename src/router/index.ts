import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
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
        name:'home',
        component: Home,
      },
      // 图标选择器
      {
        path: "/chooseIcon",
        name:'chooseIcon',
        // 路由懒加载
        component: () => import("../views/chooseIcon/index.vue"),
      },
      // 表单
      {
        path: "/form",
        name:'form',
        component: () => import("../views/form/index.vue"),
      },
      // 弹窗表单
      {
        path: "/modalForm",
        name:'modalForm',
        component: () => import("../views/modalForm/index.vue"),
      },
      // 表格
      {
        path: "/table",
        name:'table',
        component: () => import("../views/table/index.vue"),
      },
      // 日历
      {
        path: "/calendar",
        name:'calendar',
        component: () => import("../views/calendar/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
