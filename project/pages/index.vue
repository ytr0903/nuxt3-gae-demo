<template>
  <div>
    <div class="title">Nuxt 3 x GAE Demo Site</div>
    <button class="button" @click="count++">Click Me.</button>
    <p>
      Single: {{ count }}<br />
      Double: {{ doubled }}
    </p>

    <hr />

    <div class="box menu">
      <div class="menu-label">Path List</div>
      <div class="menu-list">
        <nuxt-link class="menu-item" to="/1/">1</nuxt-link>
        <nuxt-link class="menu-item" to="/2/">2</nuxt-link>
        <nuxt-link class="menu-item" to="/3/">3</nuxt-link>
        <nuxt-link class="menu-item" to="/4/">4</nuxt-link>
        <nuxt-link class="menu-item" to="/5/">5</nuxt-link>
        <nuxt-link class="menu-item" to="/6/">6</nuxt-link>
        <nuxt-link class="menu-item" to="/7/">7</nuxt-link>
        <nuxt-link class="menu-item" to="/8/">8</nuxt-link>
        <nuxt-link class="menu-item" to="/9/">9</nuxt-link>
        <nuxt-link class="menu-item" to="/10/">10</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);

const doubled = computed(() => count.value * 2);
</script>
