<script lang="ts">
export default defineComponent({
  setup() {
    useMeta({
      title: `Nuxt 3 x GAE Demo Page`,
      meta: [
        { name: "og:title", content: `Nuxt 3 x GAE Demo Page` },
        { name: "og:description", content: `Nuxt 3 x GAE の デモページです。` },
        { property: "twitter:card", content: "summary" },
        { property: "twitter:site", content: "@ykoizumi0903" },
        { property: "twitter:creator", content: "@ykoizumi0903" },
      ],
    });
    return {};
  },
});
</script>

<template>
  <div class="section">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/style.scss";
</style>
