<template>
  <rc-table
    :data="tableData"
    :options="options"
    elementLoadingText="加载中..."
    pagination
    paginationFlexType="right"
    :total="total"
    @sizeChange="sizeChange"
    @currentChange="currentChange"
    :pageSize="pageSize"
    :currentPage="current"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>name: {{ scope.row.name }}</div>
          <div>address: {{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>
    <template #action="{ scope }">
      <el-button type="primary" @click="edit(scope)">编辑</el-button>
      <el-button type="danger">删除</el-button>
    </template>
  </rc-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { TableOptions } from "../../components/table/src/type";
import axios from "axios";

interface TableData {
  date: string;
  name: string;
  address: string;
}

// 表格数据
let tableData = ref<TableData[]>([]);
// setTimeout(() => {
//   tableData.value = [
//     {
//       date: "2016-05-03",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-02",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-04",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-01",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//   ];
// }, 1000);

// 当前页码
let current = ref<number>(1);
// 每页数量
let pageSize = ref<number>(10);
// 总数
let total = ref<number>(0);

let getData = () => {
  axios
    .post("/api/list", {
      current: current.value,
      pageSize: pageSize.value,
    })
    .then((res: any) => {
      console.log(res.data);
      tableData.value = res.data.data.rows;
      total.value = res.data.data.total;
    });
};

onMounted(() => {
  getData();
});

let sizeChange = (val: number) => {
  pageSize.value = val;
  getData();
};
let currentChange = (val: number) => {
  current.value = val;
  getData();
};

// 表格配置
let options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    slot: "date",
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
  },
  {
    label: "操作",
    align: "center",
    action: true,
  },
];

const edit = (scope: any) => {
  console.log("🚀 ~ file: index.vue ~ line 61 ~ edit ~ scope", scope);
};
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
