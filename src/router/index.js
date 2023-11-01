import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@/stores/auth";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/login', component: () => import('@/views/Login.vue')},
        {path: '/', component: () => import('@/views/Songs.vue')},
        {path: '/albums', component: () => import('@/views/Album.vue')},
        {path: '/about', component: () => import('@/views/About.vue')},
    ]
})

// LV
// Tiek izveidots middleware / starpprogrammatūra kura katru reizi veiks pārbaudi pirms tiks nomainīta rūtera adrese
// arguments to glabā adresi uz kurieni gribam iet
// arguments from glabā adresi no kurienes mēs nākam

// ENG
// Middleware is a function that is executed before the route is changed
// argument "to" stores the address where we want to navigate/go
// argument "from" stores the address from where we're coming from

router.beforeEach((to, from) => {
    const authStore = useAuthStore()
    const isAuthenticated = authStore.is_authenticated

    if (isAuthenticated && to.path === '/login') {
        return '/'
    }

    if (!isAuthenticated && to.path !== '/login') {
        return '/login'
    }
})

export default router
