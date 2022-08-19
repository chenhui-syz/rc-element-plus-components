<template>
  <!-- v-bind="$attrs":这样就可以注入element-plus表格原有提供的所有属性(没在props进行定义的) -->
  <el-table
    v-bind="$attrs"
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        v-if="!item.slot"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      ></el-table-column>
      <el-table-column
        v-else
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <!-- 首先利用表格自带的插槽拿到当前列的数据scope -->
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions?.label"
      :align="actionOptions?.align"
      :width="actionOptions?.width"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
  <div
    class="pagination"
    v-if="pagination"
    :style="{ justifyContent: paginationFlexTypeJustify }"
  >
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { TableOptions } from "./type";

let props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<TableOptions[]>,
    require: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    require: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 是否显示分页器
  pagination: {
    type: Boolean,
    default: false,
  },
  // 当前是第几页的数据
  currentPage: {
    type: Number,
    default: 1,
  },
  // 每页数据的选项
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 30, 40, 50],
  },
  // 一页多少条数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 总数
  total: {
    type: Number,
  },
  // 分页器的排列方式
  paginationFlexType: {
    type: String as PropType<"left" | "center" | "right">,
    default: "left",
  },
});

// 过滤操作选项之后的配置
let tableOptions = computed(() =>
  props.options!.filter((item) => !item.action)
);

// 找出操作项的配置
let actionOptions = computed(() => props.options!.find((item) => item.action));

// 表格加载中效果
let isLoading = computed(() => props.data && !props.data.length);

let emits = defineEmits(["sizeChange", "currentChange"]);

// 分页的条数改变
let handleSizeChange = (val: number) => {
  emits("sizeChange", val);
};
// 分页的页数改变
let handleCurrentChange = (val: number) => {
  emits("currentChange", val);
};

// 根据传参动态计算分页器的排列方式
// 通过style动态绑定到分页器容器上
let paginationFlexTypeJustify = computed(() => {
  if (props.paginationFlexType === "left") return "flex-start";
  else if (props.paginationFlexType === "center") return "center";
  else return "flex-end";
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>
