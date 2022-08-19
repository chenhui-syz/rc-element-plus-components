export interface TableOptions {
  // 表头
  label: string;
  // 字段名称
  prop?: string;
  // 列宽度
  width?: string | number;
  // 对齐方式
  align?: "left" | "center" | "right";
  // 自定义列表模板名称，插槽的名字，每一列的slot不能相同
  slot?: string;
  //  是否代表操作项
  action?: boolean;
}
