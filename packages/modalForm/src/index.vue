<template>
  <!-- isScroll为true，动态绑定类名 -->
  <div :class="{ 'rc-choose-icon-dialog-body-height': isScroll }">
    <!-- v-bind="$attrs" 给当前组件注入属性，包括title，width -->
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <m-form label-width="100px" :options="options" ref="form">
          <!-- 插槽套插槽实现插槽的两次传递 -->
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </m-form>
      </template>
      <template #footer>
        <!-- 把表单组件form利用作用域插槽传递给底部操作栏 -->
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from "vue";
import { FormOptions } from "../../form/src/types/types";
let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    require: true,
  },
  // 只在屏幕内滚动
  isScroll: {
    type: Boolean,
    default: false,
  },
});

let emits = defineEmits(["update:visible"]);

// 表单示例
let form = ref<any>(null);

// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible);

// 对传递过来的属性进行监听
// 第一个watch：父组件传递过来的visible改变的时候，弹窗的控制dialogVisible也要对应的进行改变
// 第二个watch：弹窗的显示控制dialogVisible其实是已经改变的了，需要通过emits把父组件对应的visible给改变掉
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
</script>

<style lang="scss" scoped></style>
