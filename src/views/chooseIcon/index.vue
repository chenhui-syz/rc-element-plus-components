<template>
  <div>
    <rc-choose-icon title="选择图标" v-model:visible="visible"
      >选择图标</rc-choose-icon
    >
  </div>
</template>

<script lang="ts" setup>
// 全局注册了之后，这里就不用再引用组件了，在页面中直接使用就行了
// import RcChooseIcon from "../../components/chooseIcon/src/index.vue";
import { ref } from "vue";
let visible = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
