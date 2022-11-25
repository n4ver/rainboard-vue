import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Index from './views/Index.vue'
import About from './views/About.vue'

const routes = [
    {path: '/', name: 'Index', component: Index},
    {path: '/about', name: 'About', component: About}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

createApp(App).use(router).mount('#app')