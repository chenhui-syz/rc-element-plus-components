<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="rc-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <!-- 利用Object.keys快速拿到对象身上所有的键，并且返回一个数组 -->
      <!-- 利用element的滚动条组件优化滚动条样式 -->
      <!-- <el-scrollbar class="container" height="400px"> -->
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div>
            <!-- vue3-动态组件 -->
            <!-- is可以直接传递标签 -->
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="text">{{ item }}</div>
        </div>
      </div>
      <!-- </el-scrollbar> -->
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { emit } from "process";
import { watch, ref } from "vue";
import { toLine } from "../../utils";
import { useCopy } from "../../hooks/useCopy";
// 把所有的icon引入进来
import * as ElIcons from "@element-plus/icons";
let props = defineProps<{
  // 弹出框的标题
  title: string;
  // 控制弹窗框的显示与隐藏
  visible: boolean;
}>();
let emits = defineEmits(["update:visible"]);

// 拷贝一份父组件传递过来的visible
// 拷贝一份的意义就是我们不希望子组件直接去使用父组件传递过来的数据，并直接产生修改
let dialogVisible = ref<boolean>(props.visible);

// 点击按钮，显示弹出框
const handleClick = () => {
  // 需要修改父组件的数据
  emits("update:visible", !props.visible);
};

// 点击图标
const clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)}/>`;
  // 复制文本
  useCopy(text);
  // 关闭弹窗
  dialogVisible.value = false;
};

//监听visible的变化
watch(
  () => props.visible,
  (newVal) => {
    // 做法1：visible在父组件那边其实是会改变的，这里动态触发改变后的visible的值
    // emits("update:visible", newVal);
    // 做法2：动态改变拷贝的值
    dialogVisible.value = newVal;
  }
);
// 监听组件内部的dialogVisible变化
watch(
  () => dialogVisible.value,
  (newVal) => {
    emits("update:visible", newVal);
  }
);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 24px;
    cursor: pointer;
  }
  svg {
    width: 2em;
    height: 2em;
  }
  .text {
    font-size: 12px;
  }
}
</style>
