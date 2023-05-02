import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import MyCredits from "@/pages/MyCredits.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/credits',
      name: 'credits',
      component: MyCredits
    },
    {
      path: '/faq',
      name: 'FAQPage',
      component: FAQPage
    },
  ]
})

export default router
