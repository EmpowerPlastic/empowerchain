import { createRouter, createWebHistory } from "vue-router";
const HomePage = () => import("@/pages/HomePage.vue");
const FAQPage = () => import("@/pages/FAQPage.vue");
const CertificatesAndCreditsPage = () =>
  import("@/pages/CertificatesAndCreditsPage.vue");
const AuctionPage = () => import("@/pages/AuctionPage.vue");
const AuctionDetails = () => import("@/pages/AuctionDetails.vue");
const CallbackView = () => import("@/pages/CallbackView.vue");
const UserProfile = () => import("@/pages/UserProfile.vue");
const AuctionPaymentSuccessful = () =>
  import("@/pages/AuctionPaymentSuccessful.vue");
const AuctionPaymentCancelled = () =>
  import("@/pages/AuctionPaymentCancelled.vue");
const CreditCollectionPage = () => import("@/pages/CreditCollectionPage.vue");

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
    {
      path: "/registry/:denom",
      name: "CreditCollectionPage",
      component: CreditCollectionPage,
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
