<script lang="ts" setup>

</script>
<template>
  <a-row class="bg-white">
    <a-page-header>
      <template #title>
        <slot name="title"></slot>
      </template>
    </a-page-header>
    <a-divider style="margin: 0" dashed/>
  </a-row>
  <a-layout-content class="overflow-auto" style="padding: 20px 48px">
    <div>
      <slot/>
    </div>
  </a-layout-content>
</template>