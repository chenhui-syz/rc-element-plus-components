// 这个文件的作用就是用来注册组件，在进行引用的时候，实际引用的组件就是对应的这个index.ts文件
import { App } from "vue";
import form from "./src/index.vue";

// 让这个组件可以通过use的形式使用
// app.use的使用规则：函数或者对象，但必须都要有install方法
export default {
  install(app: App) {
    app.component("rc-form", form);
  },
};
