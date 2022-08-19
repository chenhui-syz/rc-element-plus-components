import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { toLine } from "./utils/index";

import "./mock";

// 全局引用自己封装的组件
// 引用方式1：未打包前，本地引用，全局引用
import rcUI from './components/index'

// 引用方式2：未打包前，本地引用，单个引用
// 如果是按需引入呢？那么在这里直接引用单个的组件就行了，同样也在下面use链式调用就可以了
// 如：
// import chooseIcon from './components/chooseIcon/index'
// 组件库打包后则可以换成packages里面的代码就行

// 引用方式3：打包后引用打包文件的，全局引用
// import rcUI from "../lib/rc-element-plus-components.mjs";
// import "../lib/style.css";
// 引用方式3：打包后引用打包文件的，单独引用，use逐个链式调用
// 单独引入组件
// import chooseIcon from "../lib/chooseIcon/index.mjs";
// import "../lib/chooseIcon/style.css";
// import form from "../lib/form/index.mjs";
// import modalForm from "../lib/modalForm/index.mjs";
// import table from "../lib/table/index.mjs";
// import "../lib/table/style.css";
// import calendar from "../lib/calendar/index.mjs";
// import "../lib/calendar/style.css";

// 引用方式5：全局引用npm发布后安装的包
// import rcUI from "rc-element-plus-components";
// import "rc-element-plus-components/style.css";

// 引用方式6：按需引用npm发布后安装的包
// import chooseIcon from "rc-element-plus-components/chooseIcon/index.mjs";
// import "rc-element-plus-components/chooseIcon/style.css";
// import form from "rc-element-plus-components/form/index.mjs";
// import modalForm from "rc-element-plus-components/modalForm/index.mjs";
// import table from "rc-element-plus-components/table/index.mjs";
// import "rc-element-plus-components/table/style.css";
// import calendar from "rc-element-plus-components/calendar/index.mjs";
// import "rc-element-plus-components/calendar/style.css";

// 全局引用图标组件，需要安装对应的插件才能引用
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
  // 单独引用
  // .use(chooseIcon)
  // .use(calendar)
  // .use(form)
  // .use(modalForm)
  // .use(table);
  // 全局引用
  .use(rcUI);

app.mount("#app");

// 如何更新已经的组件库
// 1.packages文件夹中的入口文件index.ts进行引入图标组件和工具函数
// 2.把lib文件夹的package.json+index.d.ts复制出来到npm_backup文件夹，因为这个文件是我们为了发布npm而手写的配置文件，不是打包自动生成的
// 3.把那两个文件复制出来之后，就可以npm run lib重新打包了，打包后再把两个文件复制进去，打包后生产的utils可以手动再删掉
// 4.把index.d.ts再手动复制到每个组件的文件夹中
// 5.手动修改package.json的版本号，然后cd到lib文件夹中执行npm publish更新组件库代码
