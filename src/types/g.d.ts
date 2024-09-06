import { getCurrentInstance } from 'vue'
import { Router } from 'vue-router'
declare global {
  interface Window {
    __instance: typeof getCurrentInstance
    $router: Router
  }
}
export {}
