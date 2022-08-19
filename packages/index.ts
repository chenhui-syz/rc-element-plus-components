import { App } from "vue";
import chooseIcon from "./chooseIcon";
import form from "./form";
import modalForm from "./modalForm";
import table from "./table";
import calendar from "./calendar";

// 引入样式文件夹
import './styles/base.scss'
import './styles/ui.scss'


// 将组件都添加到这个数组中
const components = [chooseIcon, form, modalForm, table, calendar];

export default {
  // 循环数组，进行组件的全局注册
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
