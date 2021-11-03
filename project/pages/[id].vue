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

useMeta({
  title: `${params.id} - Nuxt 3 x GAE Demo Page`,
  meta: [
    { property: "og:title", content: `${params.id} - Nuxt 3 x GAE Demo Page` },
    { property: "og:description", content: `IDが${params.id}のページです` },
    {
      property: "twitter:title",
      content: `${params.id} - Nuxt 3 x GAE Demo Page`,
    },
    {
      property: "twitter:description",
      content: `IDが${params.id}のページです`,
    },
  ],
});
</script>

<template>
  <div class="box">
    <div>Path: {{ params.id }}</div>
    <div>Server Date: {{ serverDate }}</div>
    <div>Client Date: {{ clientDate }}</div>
  </div>
</template>
