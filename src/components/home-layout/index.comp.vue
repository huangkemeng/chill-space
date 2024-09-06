<script setup lang="ts">
import { computed, ref, h, onMounted } from 'vue'
import { LeftOutlined, RightOutlined, OrderedListOutlined } from '@ant-design/icons-vue'
import { ItemType } from 'ant-design-vue'
import { useRouteStore } from '@/stores/routeStore'

const routerStore =   useRouteStore()
const navigationItems = ref([
  {
    key: 'system',
    label: '系统列表',
    icon: h(OrderedListOutlined)
  }
])
const name = routerStore.currentRoute.name
const selectedKeys = ref<string[]>([name.toString()])
var collapsed = ref(true)
var sideCollapsedWidth = computed((e) => (collapsed.value ? 79 : 200))
const headerTitle = ref()

onMounted(() => {
  headerTitle.value = routerStore.currentRoute.meta.headerTitle
})

function clickMenuItem(e: ItemType) {
  self.$router.push(e.key as string)
}
</script>
<template>
  <div>
    <div class="home-header">
      <a-row style="background-color: #1e293b; height: 35px" justify="end" align="middle">
        <a-col style="color: white" :span="2">
          <div style="text-decoration: underline">
            <a-popover placement="bottomLeft" v-if="true">
              <template #content>
                <span class="cursor-pointer">退出登錄</span>
              </template>
              <span>matt.h </span>
            </a-popover>
          </div>
        </a-col>
      </a-row>
      <a-row justify="start" style="background-color: #ffffff; height: 60px" align="middle">
        <a-col :flex="sideCollapsedWidth + 'px'">
          <a-row justify="center" align="middle">
            <a-col>
              <img src="@/assets/logo.png" :width="collapsed ? 48 : 64" />
            </a-col>
            <a-col style="position: absolute; right: -1px; z-index: 10">
              <a-divider style="height: 40px; margin: unset" type="vertical" />
            </a-col>
          </a-row>
        </a-col>
        <a-col flex="auto" class="ml-4">
          <span class="font-bold text-xl">系统心跳监测平台</span>
        </a-col>
      </a-row>
    </div>
    <a-layout style="height: calc(100vh - 36px - 60px)">
      <a-layout-sider
        :width="sideCollapsedWidth"
        class="overflow-y-auto"
        style="background: #fff; border-right: 1px solid #eaeaea"
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
      >
        <a-row
          justify="center"
          style="height: 40px; background-color: #f1f5f9; cursor: pointer"
          @click="() => (collapsed = !collapsed)"
        >
          <RightOutlined v-if="collapsed" />
          <LeftOutlined v-else />
        </a-row>
        <a-menu
          mode="inline"
          theme="light"
          v-model:selected-keys="selectedKeys"
          @click="clickMenuItem"
          :items="navigationItems"
        >
        </a-menu>
      </a-layout-sider>
      <a-layout class="bg-white">
        <slot></slot>
        <a-layout-footer style="text-align: center; background-color: #1e293b; color: white">
          系统心跳监测平台 ©{{ new Date().getFullYear() }}
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.home-header {
  border-bottom: 1px solid #eaeaea;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>
