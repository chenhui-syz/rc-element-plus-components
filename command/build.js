// 打包配置
// 打包因为都是用的node，所以这里都是使用commonjs规范
const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const fsExtra = require("fs-extra");
const fs = require("fs");

// 打包入口文件夹
// packages文件为打包入口文件夹，将components文件夹下的组件代码手动复制进这个文件夹中
// hooks，style，utils三个文件夹都复制进package文件夹中
// packages文件夹中关于hooks和utils文件的引用路径记得改一下，否则打包之后会报错
const entryDir = path.resolve(__dirname, "../packages");

// 出口文件夹
// 这个文件夹不需要手动建，一会打包的时候会自动生成
const outDir = path.resolve(__dirname, "../lib");

// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

// rollup配置
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 全量打包构建的方法
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, "index.ts"),
        // 打包后的名字
        name: "rc-element-plus-components",
        fileName: "rc-element-plus-components",
        // 输出内容格式
        formats: ["es", "umd"],
      },
      outDir,
    },
  });
};

// 单组件打包构建
// name：组件名称
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        // 打包后的名字
        name: "index",
        fileName: "index",
        // 输出内容格式
        formats: ["es", "umd"],
      },
      outDir: path.resolve(outDir, name),
    },
  });
};

// 给每个组件单独生成package.json
const createPackageJson = (name) => {
  const fileStr = `
    {
      "name": "${name}",
      "main": "index.umd.js",
      "module": "index.es.js",
      "style": "styles.css"
    }
  `;
  // 输出
  // 这里需要安装个插件
  // npm i -D fs-extra
  // 因为vite已经升级到3版本，所以要先把对应的插件也升级下，npm i @vitejs/plugin-vue@2.3.3
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    "utf-8"
  );
};

// 打包成库
const buildLib = async () => {
  await buildAll();

  // 获取组件名称组成的数组
  console.log('运行到这里了吗1111')
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name);
    // 判断是不是一个目录
    const isDir = fs.lstatSync(componentDir).isDirectory();
    // 如果是目录，并且目录下有index.ts文件，则进行返回

    return isDir && fs.readdirSync(componentDir).includes("index.ts");
    // utils文件夹是不需要的，可以手动删除，或者在这里过滤掉
  });

  

  // 循环构建
  for (const name of components) {
    await buildSingle(name);
    createPackageJson(name);
  }
  // 要想能够成功循环构建，还需要改造下package.json里的lib脚本，在执行原有脚本的同时拷贝一份package.json
};

buildLib();

// 写好这个打包逻辑后，去package.json配置打包脚本 npm run lib
// 配置好脚本后因为项目是用的ts，所以还要在packages文件夹新增个ts的类型声明
