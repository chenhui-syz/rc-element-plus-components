<template>
  <div>
    <el-button @click="visible = true"></el-button>
    <!-- 组件内打算修改该属性，就用v-model:传递过去 -->
    <!-- options相当于要经历两层传递 -->
    <!-- 页面传给弹窗组件，弹窗组件传给表单组件 -->
    <rc-modal-form
      isScroll
      title="编辑用户"
      width="50%"
      :options="options"
      v-model:visible="visible"
    >
      <template #footer="{ form }">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="comfirm">确定</el-button>
      </template>
      <template #uploadArea>
        <el-button size="default" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="font-size: 12px; color: #999; padding-left: 10px">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </rc-modal-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FormOptions } from "../../components/form/src/types/types";
import { Elmessage } from "element-plus";

let visible = ref<boolean>(false);

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    placeholder: "请填写职位",
    prop: "username",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    label: "职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "hobby",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "排球",
        value: "3",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "famale",
      },
      {
        type: "radio",
        label: "保密",
        value: "not",
      },
    ],
  },
  {
    type: "upload",
    label: "上传资料",
    prop: "pic",
    uploadAttrs: {
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: true,
      limit: 3,
    },
    // rules: [
    //   {
    //     required: true,
    //     message: "不能为空",
    //     trigger: "blur",
    //   },
    // ],
  },
  // 富文本编辑器
  {
    type: "editor",
    value: "111",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
];

// 点击取消
const cancel = (form: any) => {};

// 点击确认
const confirm = (form: any) => {
  let validate = form.validate();
  let model = form.getFormDate();
  // 表单验证
  validate((valid: any) => {
    if (valid) {
      Elmessage.success("验证成功");
      console.log(model);
    } else {
      Elmessage.error("验证失败");
    }
  });
  Elmessage;
};
</script>

<style lang="scss" scoped></style>
