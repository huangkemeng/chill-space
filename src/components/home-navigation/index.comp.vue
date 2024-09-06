<script lang="ts" setup>
import { ref } from 'vue'


const current = ref<string[]>([])

</script>
<template>
  <div>
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      style="border-bottom-style: none; font-size: 1.1em"
    />
  </div>
</template>
