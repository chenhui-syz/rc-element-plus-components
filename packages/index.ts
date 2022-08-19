import { App } from "vue";
import chooseIcon from "./chooseIcon";
import form from "./form";
import modalForm from "./modalForm";
import table from "./table";
import calendar from "./calendar";

// 把图标和工具函数引入进来
import * as Icons from "@element-plus/icons";
import { toLine } from "./utils";

// 引入样式文件夹
import "./styles/base.scss";
import "./styles/ui.scss";

// 将组件都添加到这个数组中
const components = [chooseIcon, form, modalForm, table, calendar];

export default {
  // 循环数组，进行组件的全局注册
  install(app: App) {
    // 注册icons
    for (let i in Icons) {
      // 注册全部图标组件
      app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
    }
    components.map((item) => {
      app.use(item);
    });
  },
};
