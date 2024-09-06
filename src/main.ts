import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import EngineBus from '@/engines/EngineBus'
import Ant from 'ant-design-vue'
import piniaPersistedstatePlugin from 'pinia-plugin-persistedstate'

const app = createApp(App)
app.use(Ant)
const pinia = createPinia();
pinia.use(piniaPersistedstatePlugin)
app.use(pinia)
EngineBus.RunEngine(app)
app.mount('#app')
