// 告诉使用当前组件库的项目
// 我们这个组件库是一个vue的插件
import { App } from "vue";
declare const _dafult: {
  install(app: App): void;
};

export default _dafult;
