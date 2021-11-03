<script lang="ts" setup>
import dayjs from "dayjs";
const { params } = useRoute();
const clientDate = ref();
onMounted(() => {
  clientDate.value = dayjs().toString();
});

const { data: serverDate } = await useAsyncData("date", async () => {
  const date = dayjs().toString();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return date;
});
</script>

<template>
  <div class="box">
    <div>Path: {{ params.id }}</div>
    <div>Server Date: {{ serverDate }}</div>
    <div>Client Date: {{ clientDate }}</div>
  </div>
</template>
