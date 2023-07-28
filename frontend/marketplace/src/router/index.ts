import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import CertificatesAndCreditsPage from "@/pages/CertificatesAndCreditsPage.vue";
import AuctionPage from "@/pages/AuctionPage.vue";
import AuctionDetails from "@/pages/AuctionDetails.vue";
import CertificatePage from "@/pages/CertificatePage.vue";
import PlasticCreditRegistry from "@/pages/PlasticCreditRegistry.vue";
import RegistryDetailsPage from "@/pages/RegistryDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/certificate",
      name: "certificatesAndCredits",
      component: CertificatesAndCreditsPage,
    },
    {
      path: "/faq",
      name: "FAQPage",
      component: FAQPage,
    },
    {
      path: "/auction",
      name: "Auction",
      component: AuctionPage,
    },
    {
      path: "/auction/:id",
      name: "AuctionDetails",
      component: AuctionDetails,
    },
    {
      path: "/certificate/:id",
      name: "CertificatePage",
      component: CertificatePage,
      meta: { hideNavFooter: true }, //To hide nav and footer on this page
    },
    {
      path: "/registry",
      name: "PlasticCreditRegistry",
      component: PlasticCreditRegistry,
    },
    {
      path: "/registry/:id",
      name: "RegistryDetails",
      component: RegistryDetailsPage,
    },
  ],
});

export default router;
