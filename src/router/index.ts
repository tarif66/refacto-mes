import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../routes/Accueil.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  
        { 
          path: '/',
          name: 'root',
          component: Accueil,
        }

      ],
        scrollBehavior() {
    return { top: 0 }
  }
    })

export default router