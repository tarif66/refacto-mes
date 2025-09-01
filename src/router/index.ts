import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../routes/Accueil.vue'
import ProfilMedical from '../routes/Profil-medical.vue'
import Vaccinations from '../routes/Vaccinations.vue'
import Documents from '../routes/Documents.vue'
import Messagerie from '../routes/Messagerie.vue'
import Prevention from '../routes/Prevention.vue'
import Agenda from '../routes/Agenda.vue'
import CatalogueDeServices from '../routes/Catalogue de services.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  
        { 
          path: '/',
          name: 'root',
          component: Accueil,
        },
        { 
          path: '/profil-medical',
          name: 'profil-medical',
          component: ProfilMedical,
        },
        { 
          path: '/vaccinations',
          name: 'vaccinations',
          component: Vaccinations,
        },
        { 
          path: '/documents',
          name: 'documents',
          component: Documents,
        },
        { 
          path: '/messagerie',
          name: 'messagerie',
          component: Messagerie,
        },
        { 
          path: '/prevention',
          name: 'prevenetion',
          component: Prevention,
        },
        { 
          path: '/agenda',
          name: 'agenda',
          component: Agenda,
        },
        { 
          path: '/catalogue-de-services',
          name: 'catalogue-de-services',
          component: CatalogueDeServices,
        },
      ],
        scrollBehavior() {
    return { top: 0 }
  }
    })

export default router