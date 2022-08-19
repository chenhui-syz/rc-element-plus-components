# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

发布到github上并部署静态网站
1.路由的createWebHistory改成createWebHashHistory,哈希模式部署到github才能正常访问到静态资源
2.npm run build 进行打包  《"build": "vue-tsc --noEmit && vite build",这样打包会报很多错误，把前面部分vue-tsc --noEmit && 去掉》
3.dist就是我们要部署的文件，去github上创建对应的项目仓库
4.setting找到github pages，点击对应的分支，save之后就会生成静态网站的链接，就可以进行访问了

码云上部署静态网站
1.新建仓库，注意要部署的dist文件，不能同时部署到github和码云，会产生冲突
2.操作和github差不多，但是码云的这个服务需要进行下实名认证，https可以勾选上