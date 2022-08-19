import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { toLine } from "./utils/index";

import "./mock";

// 全局引用自己封装的组件
// import rcUI from './components/index'
// 如果是按需引入呢？那么在这里直接引用单个的组件就行了，同样也在下面use链式调用就可以了
// 如：
// import chooseIcon from './components/chooseIcon/index'
// 组件库打包后则可以换成packages里面的代码就行
import rcUI from "../lib/rc-element-plus-components.mjs";
import "../lib/style.css";
// 单独引入组件
import chooseIcon from "../lib/chooseIcon/index.mjs";
import "../lib/chooseIcon/style.css";
import form from "../lib/form/index.mjs";
import modalForm from "../lib/modalForm/index.mjs";
import table from "../lib/table/index.mjs";
import "../lib/table/style.css";
import calendar from "../lib/calendar/index.mjs";
import "../lib/calendar/style.css";

// 全局引用图标组件
import * as Icons from "@element-plus/icons";

// 用app变量去挂载更多的内容
const app = createApp(App);

// 全局注册图标，会牺牲一点性能
for (let i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}
// 链式调用
// 单独的use每一个组件
app
  .use(router)
  .use(ElementPlus)
  .use(chooseIcon)
  .use(calendar)
  .use(form)
  .use(modalForm)
  .use(table);
// .use(rcUI);

app.mount("#app");
