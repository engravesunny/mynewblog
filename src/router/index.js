import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'layout',
        redirect: '/home',
        component: () => import('@/view/layout'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/view/home')
            },
            {
                path: '/category',
                name: 'category',
                component: () => import('@/view/article/category')
            },
            {
                path: '/archive',
                name: 'archive',
                component: () => import('@/view/article/archive')
            },
            {
                path: '/tags',
                name: 'tags',
                component: () => import('@/view/article/tags')
            },
            {
                path: '/common_web',
                name: 'common_web',
                component: () => import('@/view/guide/common-web')
            },
            {
                path: '/person_web',
                name: 'person_web',
                component: () => import('@/view/guide/personal-web')
            },
            {
                path: '/photo',
                name: 'photo',
                component: () => import('@/view/media/photo')
            },
            {
                path: '/video',
                name: 'video',
                component: () => import('@/view/media/video')
            },
            {
                path: '/anime',
                name: 'anime',
                component: () => import('@/view/media/anime')
            },
            {
                path: '/me',
                name: 'me',
                component: () => import('@/view/about/me')
            },
            {
                path: '/comment',
                name: 'comment',
                component: () => import('@/view/about/comment')
            },
            {
                path: '/friend',
                name: 'friend',
                component: () => import('@/view/about/friend')
            },
            {
                path: '/article',
                name: 'article',
                component: () => import('@/view/article/article')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login')
    }
]

const router = new VueRouter({
    routes
})

export default router