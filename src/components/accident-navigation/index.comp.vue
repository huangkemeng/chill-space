<script lang="ts" setup>
import { MenuProps } from 'ant-design-vue'
import { onMounted, reactive, ref } from 'vue'

const menuItems = ref<MenuProps['items']>([
  {
    key: 'accident-center',
    label: '事故平台',
    title: '事故平台'
  },
  {
    key: 'driver-center',
    label: '司機安全檔案平台',
    title: '司機安全檔案平台'
  }
])

const current = ref<string[]>([])
onMounted(() => {
  if (menuItems.value.length) {
    const key = menuItems.value[0].key as string
    current.value = [key]
  }
})
</script>
<template>
  <div>
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      :items="menuItems"
      style="border-bottom-style: none; font-size: 1.1em"
    />
  </div>
</template>
