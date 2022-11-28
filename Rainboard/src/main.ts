import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Index from './views/Index.vue'
import About from './views/About.vue'
import PathNotFound from './views/PathNotFound.vue'

const routes = [
    {path: '/', name: 'Index', component: Index},
    {path: '/about', name: 'About', component: About},
    {path: '/404', name: '404', component: PathNotFound},
    {path: '/:pathMatch(.*)*', redirect: '/404' },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

createApp(App).use(router).mount('#app')