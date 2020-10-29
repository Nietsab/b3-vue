import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        // component: Home
        components: {
            default : () => import(/* webpackChunkName: "home" */ '../views/HelloWorld.vue'),
        }
    },
    {
        path: '/about',
        name: 'About',
        components: {
            about : () => import('../views/About'),
        }
    },
    {
        path: '/user',
        name: 'User',
        components: {
            user : () => import('../views/User'),
        }
    },
    {
        path: '/user/:user_id/action/:action',
        name: 'user',
        // Components: Home
        components: {
            default : () => import(/* webpackChunkName: "home" */ '../views/HelloWorld')
        },
        props: {
            saucisse: 'toulouse'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router