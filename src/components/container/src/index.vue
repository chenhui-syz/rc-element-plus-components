<template>
  <el-container>
    <!-- 这里设置为auto，才能动态的适配宽度 -->
    <el-aside width="auto">
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";
let isCollapse = ref(false);
const getUpdate = (e: boolean) => {
  isCollapse.value = e;
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
