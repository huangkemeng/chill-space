<script setup lang="ts">
import {RouterView} from 'vue-router'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import {useRouteStore} from '@/stores/routeStore'
import {v4 as uuidv4} from "uuid";

function getPopupContainer(el: {}, dialogContext: { getDialogWrap: Function }) {
  if (dialogContext) {
    return dialogContext.getDialogWrap()
  } else {
    return document.body
  }
}

function getLocale(lang: 'en' | 'zh') {
  if (lang == 'en') {
    return enUS
  }
  return zhCN
}

var routeStore = useRouteStore();
const uuid = uuidv4();
</script>
<template>
  <a-config-provider :getPopupContainer="getPopupContainer" :locale="getLocale('en')" :csp="{ nonce: uuid }"
                     :wave="{disabled:false}">
    <home-layout
        v-if="routeStore.currentRoute&&routeStore.currentRoute.meta&&routeStore.currentRoute.meta.layout =='home'">
      <router-view/>
    </home-layout>
    <login-layout
        v-else-if="routeStore.currentRoute&&routeStore.currentRoute.meta&&routeStore.currentRoute.meta.layout =='login'">
      <router-view/>
    </login-layout>
    <router-view v-else/>
  </a-config-provider>
</template>
