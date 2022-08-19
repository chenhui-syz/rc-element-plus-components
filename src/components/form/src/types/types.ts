// 可配置的表单，ts文件定义类型

import { RuleItem } from "./rule";
import { CSSProperties } from "vue";

// 表单每一项的配置选项
export interface FormOptions {
  // 表单项显示的元素，显示用户只能传element-plus定义好的表单组件名称
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "checkbox-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "switch"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload"
    // 富文本编辑器
    | "editor";
  // 表单项的值，可能是数组，字符串，数字等，所以给any类型
  value?: any;
  // 表单项的label
  label?: string;
  // 表单项的标识，表单验证的话就是需要这个prop的
  prop?: string;
  // 表单项的验证规则
  // element的表单验证底层源码是基于async-validator这个库，从这个库里复制校验规则的接口类型代码RuleItem进行使用
  // https://github.com/yiminghe/async-validator/blob/master/src/interface.ts
  rules?: RuleItem[];
  // 占位符
  placeholder?: string;
  // 表单元素的特有属性
  attrs?: {
    // 能否清空
    clearable?: boolean;
    // 是否显示切换展示密码图标
    showPassword?: boolean;
    // 是否禁用
    disabled?: boolean;
    // css样式属性
    style?: CSSProperties;
  };
  // 表单项的子元素
  children?: FormOptions[];
  // 单独处理上传组件的属性和方法
  uploadAttrs?: {
    action: string;
    headers?: object;
    method?: "post" | "put" | "patch";
    multiple?: boolean;
    data?: any;
    name?: string;
    withCredentials?: boolean;
    showFileList?: boolean;
    drag?: boolean;
    accept?: string;
    thumbnailMode?: boolean;
    fileList?: any[];
    listType?: "text" | "picture" | "picture-card";
    autoUpload?: boolean;
    disable?: boolean;
    limit?: number;
  };
}
