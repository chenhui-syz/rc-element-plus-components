<template>
  <div class="header">
    <span @click="toggle">
      <!-- 当前菜单是收缩状态 -->
      <el-icon-expand
        v-if="collapse"
      ></el-icon-expand>
      <!-- 当前菜单是展开状态 -->
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{ collapse: boolean }>();
// vue3语法糖：快速改变父组件传递过来的值
let emits = defineEmits(["update:collapse"]);
const toggle = () => {
  console.log("触发左侧边栏折叠事件");
  // 需要修改父组件的数据
  emits("update:collapse", !props.collapse);
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
