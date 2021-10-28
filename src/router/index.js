import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/consultancy-brand-protection',
    name: 'Cons&BrandProtection',
    component: () => import('../views/Cons&BrandProtection.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/cyber-consultans',
    name: 'CyberConsultans',
    component: () => import('../views/CyberConsultans.vue')
  },
  {
    path: '/software',
    name: 'Software',
    component: () => import('../views/Software.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/Timeline.vue')
  },
  {
    path: '/who-we-are',
    name: 'WhoWeAre',
    component: () => import('../views/WhoWeAre.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router