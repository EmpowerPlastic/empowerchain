import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import CertificatesAndCreditsPage from "@/pages/CertificatesAndCreditsPage.vue";
import AuctionPage from "@/pages/AuctionPage.vue";
import AuctionDetails from "@/pages/AuctionDetails.vue";
import CertificatePage from "@/pages/CertificatePage.vue";
import CallbackView from "@/pages/CallbackView.vue";
import UserProfile from "@/pages/UserProfile.vue";

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
      path: "/callback",
      name: "CallbackPage",
      component: CallbackView,
      meta: { hideNavFooter: true }, //To hide nav and footer on this page
    },
    {
      path: "/profile",
      name: "UserProfilePage",
      component: UserProfile,
      meta: { requiresAuth: true },
    },
  ],
});

const isAuthenticated = (): boolean => {
  // return a boolean based on user's authentication status
  return true; // TODO: implement this
};

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated()
  ) {
    next({ name: "home" }); // redirect to home page if the user is not authenticated
  } else {
    next(); // proceed as normal if the user is authenticated or the route does not require authentication
  }
});

export default router;
