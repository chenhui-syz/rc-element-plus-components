<template>
  <rc-calendar
    :displayEventEnd="true"
    :events="events"
    :eventContent="eventContent"
    @dateClick="dateClick"
    @eventClick="eventClick"
  ></rc-calendar>
</template>

<script lang="ts" setup>
import { EventClickArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventItem } from "../../components/calendar/src/type";
import { ref } from "vue";

// ref进行定义，这样才可以双向绑定，动态的去往events里面添加日期事件源
let events = ref<EventItem[]>([
  {
    title: "购物",
    start: "2022-08-17 08:00",
    end: "2022-08-17 12:00",
    editable: true,
  },
  {
    title: "敲代码",
    start: "2022-08-18 13:00",
    end: "2022-08-19 14:00",
  },
]);

// 点击日期的事件
const dateClick = (info: DateClickArg) => {
  console.log("🚀 ~ file: index.vue ~ line 25 ~ dateClick ~ info", info);
  events.value.push({
    // 这里日期和时间之间注意一定要有空格
    start: info.dateStr + " 12:00",
    end: info.dateStr + " 18:00",
    title: "学习",
  });
};

// 点击日期中事件的事件
const eventClick = (info: EventClickArg) => {
  console.log("🚀 ~ file: index.vue ~ line 25 ~ dateClick ~ info", info);
};

// 自定义渲染内容==对事件源内容进行二次处理
const eventContent = (arg: EventContentArg) => {
  let el = document.createElement("div");
  // 将事件的时间范围进行切割
  let timeTextArr = arg.timeText.split("-");
  // 拿到时间的开始时间和结束时间，可以进行自定义的内容替换
  let start = timeTextArr[0].replace("", "");
  let end = timeTextArr[1].replace("", "");
  // 这里就可以随便插入自己想要的内容以及自定义样式
  el.innerHTML = `
            <div>开始时间：${start}</div>
            <div>结束时间：${end}</div>
            <div>标题：${arg.event._def.title}</div>
        `;
  return {
    domNodes: [el],
  };
};
</script>

<style lang="scss" scoped>
</style>