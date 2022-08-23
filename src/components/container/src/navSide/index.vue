<template>
  <el-menu
    :default-active="active"
    class="el-menu-vertical-demo"
    :collapse="collapse"
    @select="select"
  >
    <el-menu-item
      v-for="(item, index) in routerList"
      :key="index"
      :index="index + ''"
    >
      <el-icon-menu></el-icon-menu>
      <span class="ml-10">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
let props = defineProps<{ collapse: boolean }>();
let active = ref<string>();

const routerList = [
  {
    pathName: "home",
    label: "首页",
  },
  {
    pathName: "chooseIcon",
    label: "图标选择器",
  },
  {
    pathName: "form",
    label: "表单",
  },
  {
    pathName: "modalForm",
    label: "弹窗表单",
  },
  {
    pathName: "table",
    label: "表格",
  },
  {
    pathName: "calendar",
    label: "日历",
  },
];

const select = (tabIndex: string) => {
  const routerItem = routerList.find((item, index) => index + "" === tabIndex);
  router.push({
    name: routerItem.pathName,
  });
  console.log("🚀 ~ file: index.vue ~ line 42 ~ select ~ val", tabIndex);
};

onMounted(() => {
  // 手动改变active
  active.value =
    routerList.findIndex(
      (item) => item.pathName === route.path.replace("/", "")
    ) + "";
  // 首页进行下特殊处理
  active.value = Number(active.value) < 0 ? "0" : active.value;
});
</script>

<style lang="scss" scoped>
// 设定一下展开的宽度
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.ml-10 {
  margin-left: 10px;
}
</style>
