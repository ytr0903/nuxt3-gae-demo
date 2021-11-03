<template>
  <div>
    <button class="button" @click="count++">Click Me.</button>
    <p>
      Single: {{ count }}<br />
      Double: {{ doubled }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);

const doubled = computed(() => count.value * 2);
</script>
