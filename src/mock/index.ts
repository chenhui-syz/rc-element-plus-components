//mock.js文件
import Mock from "mockjs"; //引入mockjs
const Random = Mock.Random;

interface DataList {
  date: string;
  name: string;
  address: string;
}

const dataList: DataList[] = [];
for (let i = 0; i < 100; i++) {
  const template = {
    date: Random.date(), //生成一个随机日期
    name: Random.name(), //生成姓名
    address: Random.province(), // 生成地址
  };
  dataList.push(template);
}

//list 分页接口
Mock.mock("/api/list", "post", (params: any) => {
  let info = JSON.parse(params.body);
  let [index, size, total] = [info.current, info.pageSize, dataList.length];
  let len = total / size;
  let totalPages = len - parseInt(String(len)) > 0 ? parseInt(String(len)) : 0;
  let newDataList = dataList.slice(index * size, (index + 1) * size);
  return {
    code: "200",
    message: "获取成功",
    data: {
      current: index,
      pageSize: size,
      rows: newDataList,
      total: total,
      totalPages: totalPages,
    },
  };
});
