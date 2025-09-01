import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/routes/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
  
        { 
          path: '/',
          name: 'root',
          component: HomePage,
        }

      ],
        scrollBehavior() {
    return { top: 0 }
  }
    })

export default router