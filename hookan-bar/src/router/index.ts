import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Interior from '@/components/Interior.vue';
import ContactsPage from '@/components/ContactsPage.vue';
import RulesPage from '@/components/RulesPage.vue';
import LoyaltyProgramPage from '@/components/LoyaltyProgramPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/interior',
      component: Interior
    },
    {
      path: '/contacts',
      component: ContactsPage
    },
    {
      path: '/rules',
      component: RulesPage
    },
    {
      path: '/loyaltyProgram',
      component: LoyaltyProgramPage
    },
  ]
})

export default router
