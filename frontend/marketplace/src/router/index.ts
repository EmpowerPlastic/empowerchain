import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import CertificatesAndCreditsPage from "@/pages/CertificatesAndCreditsPage.vue";
import AuctionPage from "@/pages/AuctionPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/certificate',
      name: 'certificatesAndCredits',
      component: CertificatesAndCreditsPage
    },
    {
      path: '/faq',
      name: 'FAQPage',
      component: FAQPage
    },
    {
      path: '/auction',
      name: 'Auction',
      component: AuctionPage
    },
  ]
})

export default router
