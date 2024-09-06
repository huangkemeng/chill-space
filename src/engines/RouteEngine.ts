import type IEngine from './IEngine'
import {useRouteStore} from '../stores/routeStore'
import {createRouter, createWebHashHistory, type RouteRecordRaw} from 'vue-router'
import type {App} from 'vue'

const routeModules = import.meta.glob('/src/views/**/**.route.(ts|js)', {
    eager: true
})

export default class RouteEngine implements IEngine {
    public Run(app: App): void {
        const routes: RouteRecordRaw[] = []
        const routeStore = useRouteStore()
        for (const [, value] of Object.entries(routeModules)) {
            const routeType = value as {
                default: any
            }
            if (routeType.default) {
                const pageRoutes: RouteRecordRaw[] = routeType.default
                if (pageRoutes && pageRoutes.length) {
                    pageRoutes.forEach((pageRoute) => {
                        pageRoute.beforeEnter = (to, from, next) => {
                            routeStore.currentRoute = to
                            let version = import.meta.env.VITE_APP_VERSION
                            if (version) {
                                version = `(${version})`
                            } else {
                                version = ''
                            }
                            let title = import.meta.env.VITE_APP_TITLE + version
                            if (to.meta.title) {
                                title = title + ' - ' + String(to.meta.title)
                            }
                            document.title = title
                            next()
                        }
                        routes.push(pageRoute)
                    })
                }
            }
        }
        const router = createRouter({
            history: createWebHashHistory(),
            routes: routes
        })
        app.use(router)
        self.$router = router
    }

    public Priority() {
        return -1
    }
}
