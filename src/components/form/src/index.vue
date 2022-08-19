<template>
  <el-form
    ref="form"
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          :is="`el-${item.type}`"
          v-bind="item.attrs"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        ></component>
        <!-- 上传组件 -->
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
          :on-exceed="onExceed"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
        <!-- 富文本编辑器 -->
        <div id="editor" v-if="item.type === 'editor'"></div>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          :is="`el-${item.type}`"
          v-bind="item.attrs"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
        >
          <!-- component内部是预留了插槽位置的 -->
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          ></component>
        </component>
      </el-form-item>
    </template>
    <!-- 操作项 -->
    <el-form-item>
      <!-- 利用作用域插槽将表单实例form，表单值model 发送给父组件的插槽进行使用 -->
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, nextTick } from "vue";
import { FormOptions } from "./types/types";
// 单独引用lodash提供的深拷贝方法
import cloneDeep from "lodash/cloneDeep";

import E from "wangeditor";

// 把上传组件的时间全部发出去给父组件处理
let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "before-upload",
  "before-remove",
  "on-exceed",
]);

let model = ref<any>({});
let rules = ref<any>({});
// 表单的类型很复杂，需要从element-plus源码中拷贝FormInstance，这里暂且定义成any
let form = ref<any>(null);
// 记录富文本创建后editor实例
let edit = ref();
let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    require: true,
  },
  // 用户自定义的上传方法
  httpRequest: {
    type: Function,
  },
});

// 初始化表单
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options!.map((item: FormOptions) => {
      m[item.prop as any] = item.value;
      // ts中的!：非空断言
      r[item.prop!] = item.rules;
      // 初始化富文本
      if (item.type === "editor") {
        const editor = new E("#editor");
        // 加个感叹号，表示该属性一定是符合条件的
        editor.config.placeholder = item.placeholder!;
        editor.create();
        // 初始化富文本的内容
        editor.txt.html(item.value);
        // 动态获取富文本的输入内容
        editor.config.onchange = (newValue: string) => {
          // console.log(newValue);
          model.value[item.prop!] = newValue;
        };
        // 记录editor，这样在别的地方就可以使用
        edit.value = editor;
      }
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};

// 重置表单的方法
// 为了能够自动一键清空自定义的上传组件和富文本组件的值
let resetFields = () => {
  // 重置element-plus表单
  form.value!.resetFields();
  // 重置富文本编辑器的内容
  // 获取富文本的配置项
  if (props.options && props.options.length) {
    let editorItem = props.options.find((item) => item.type === "editor")!;
    edit.value.txt.html(editorItem.value);
  }
};

// 表单验证，包装一下，用于分发出去
let validate = () => {
  return form.value!.validate;
};

// 获取表单数据
let getFormDate = ()=>{
  // model就是当前表单的数据，注意一定不要把这个数据分发出去，而是分发一个获得表单数据的方法
  // 直接分发model，只会拿到表单的初始值，而不是最新的
  return model.value
}

// 分发方法
// vue2可以通过ref拿到组件实例，并且调用组件上的属性和方法，但是vue3要使用defineExpose分发出去才能使用
// vue3新提供的，作用就是把组件的属性和方法给分发出去
// vue3对组件的优化和保护，如果不通过defineExpose进行暴露，则通过ref拿到的组件实例是空
defineExpose({
  resetFields,
  validate,
  getFormDate
});

onMounted(() => {
  initForm();
});

//上传组件的所有方法
let onPreview = (file: File) => {
  // 把参数发给父组件，如果是一个参数，就写一个参数，如果大于一个参数，就以对象的形式发送出去
  emits("on-preview", file);
};
let onRemove = (file: File, fileList: FileList) => {
  emits("on-remove", { file, fileList });
};
let onSuccess = (response: File, file: File, fileList: FileList) => {
  // 上传图片成功，给表单上传项赋值
  let uploadItem = props.options!.find((items) => items.type === "upload");
  // 将返回数据统一先都怼进model对应的上传数据中
  model.value[uploadItem.prop!] = { response, file, fileList };
  emits("on-success", { response, file, fileList });
};
let onError = (err: any, file: File, fileList: FileList) => {
  emits("on-error", { err, file, fileList });
};
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits("on-progress", { event, file, fileList });
};
let onChange = (file: File, fileList: FileList) => {
  emits("on-change", { file, fileList });
};
let beforeUpload = (file: File) => {
  emits("before-upload", file);
};
let beforeRemove = (file: File, fileList: FileList) => {
  emits("before-remove", { file, fileList });
};
let onExceed = (files: any, fileList: FileList) => {
  emits("on-exceed", { files, fileList });
};
</script>

<style lang="scss" scoped></style>
