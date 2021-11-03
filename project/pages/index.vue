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
        <a class="menu-item" href="/1/">1</a>
        <a class="menu-item" href="/2/">2</a>
        <a class="menu-item" href="/3/">3</a>
        <a class="menu-item" href="/4/">4</a>
        <a class="menu-item" href="/5/">5</a>
        <a class="menu-item" href="/6/">6</a>
        <a class="menu-item" href="/7/">7</a>
        <a class="menu-item" href="/8/">8</a>
        <a class="menu-item" href="/9/">9</a>
        <a class="menu-item" href="/10/">10</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);

const doubled = computed(() => count.value * 2);
</script>
