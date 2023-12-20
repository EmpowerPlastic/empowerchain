import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import CertificatesAndCreditsPage from "@/pages/CertificatesAndCreditsPage.vue";
import AuctionPage from "@/pages/AuctionPage.vue";
import AuctionDetails from "@/pages/AuctionDetails.vue";
import CertificatePage from "@/pages/CertificatePage.vue";
import CallbackView from "@/pages/CallbackView.vue";
import UserProfile from "@/pages/UserProfile.vue";
import AuctionPaymentSuccessful from "@/pages/AuctionPaymentSuccessful.vue";
import AuctionPaymentCancelled from "@/pages/AuctionPaymentCancelled.vue";

const router = createRouter({
  scrollBehavior: () => {
    // always scroll to top after navigation
    return { top: 0 };
  },
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
      path: "/callback",
      name: "CallbackPage",
      component: CallbackView,
      meta: { hideNavFooter: true }, //To hide nav and footer on this page
    },
    {
      path: "/profile",
      name: "UserProfilePage",
      component: UserProfile,
    },
    {
      path: "/purchase-successful",
      name: "AuctionPaymentSuccessful",
      component: AuctionPaymentSuccessful,
    },
    {
      path: "/purchase-cancelled",
      name: "AuctionPaymentCancelled",
      component: AuctionPaymentCancelled,
    },
    // {
    //   path: "/payment-cancelled/:id",
    //   name: "AuctionPaymentCancelled",
    //   component: AuctionPaymentCancelled,
    // },
  ],
});

export default router;
export { useRoute, useRouter } from "vue-router";
