import systemView from './index.view.vue'
export default [

  {
    path: '/',
    name: 'home',
    redirect: {
      name: 'system'
    }
  },
  {
    path: '/system',
    name: 'system',
    component: systemView,
    meta: {
      layout: 'home'
    }
  }
] as RouteRecordRaw[]
