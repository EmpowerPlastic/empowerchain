import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
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

import tracking, {
  PageViewEvents,
  type EventProperties,
} from "@/utils/analytics";

type PageViewEventWithProperties = (
  to: RouteLocationNormalized,
) => [PageViewEvents, EventProperties];
export {};

declare module "vue-router" {
  interface RouteMeta {
    pageViewEvent?: PageViewEvents | PageViewEventWithProperties;
    hideNavFooter?: boolean;
  }
}

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
      meta: {
        pageViewEvent: PageViewEvents.START_PAGE,
      },
    },
    {
      path: "/certificate",
      name: "certificatesAndCredits",
      component: CertificatesAndCreditsPage,
      meta: {
        pageViewEvent: PageViewEvents.CERTIFICATES,
      },
    },
    {
      path: "/faq",
      name: "FAQPage",
      component: FAQPage,
      meta: {
        pageViewEvent: PageViewEvents.FAQ,
      },
    },
    {
      path: "/auction",
      name: "Auction",
      component: AuctionPage,
      meta: {
        pageViewEvent: PageViewEvents.PLASTIC_CREDIT_LISTINGS,
      },
    },
    {
      path: "/auction/:id",
      name: "AuctionDetails",
      component: AuctionDetails,
      meta: {
        pageViewEvent: (to: RouteLocationNormalized) => {
          const trackProps = {
            id: to.params.id,
          };
          return [PageViewEvents.PLASTIC_CREDIT_LISTING, trackProps];
        },
      },
    },
    {
      path: "/callback",
      name: "CallbackPage",
      component: CallbackView,
      meta: {
        hideNavFooter: true, //To hide nav and footer on this page
        pageViewEvent: PageViewEvents.LOGIN_CALLBACK,
      },
    },
    {
      path: "/profile",
      name: "UserProfilePage",
      component: UserProfile,
      meta: {
        pageViewEvent: PageViewEvents.USER_PROFILE,
      },
    },
    {
      path: "/purchase-successful",
      name: "AuctionPaymentSuccessful",
      component: AuctionPaymentSuccessful,
      meta: {
        pageViewEvent: PageViewEvents.PAYMENT_SUCCESSFUL,
      },
    },
    {
      path: "/purchase-cancelled",
      name: "AuctionPaymentCancelled",
      component: AuctionPaymentCancelled,
      meta: {
        pageViewEvent: PageViewEvents.PAYMENT_CANCELLED,
      },
    },
    {
      path: "/registry/:denom",
      name: "CreditCollectionPage",
      component: CreditCollectionPage,
      meta: {
        pageViewEvent: (to: RouteLocationNormalized) => {
          const trackProps = {
            denom: to.params.denom,
          };
          return [PageViewEvents.REGISTRY, trackProps];
        },
      },
    },
  ],
});

const trackPageView = (
  pageViewEvent: PageViewEvents | PageViewEventWithProperties,
  to: RouteLocationNormalized,
) => {
  if (pageViewEvent && typeof pageViewEvent === "string") {
    tracking.pageViewEvent(pageViewEvent as PageViewEvents);
  } else if (pageViewEvent && typeof pageViewEvent === "function") {
    const [eventName, eventProperties] = pageViewEvent(to);
    tracking.pageViewEvent(eventName, eventProperties);
  }
};

router.afterEach((to) => {
  const meta = to.meta;
  if (meta.pageViewEvent) {
    trackPageView(meta.pageViewEvent, to);
  } else {
    tracking.pageViewEvent(PageViewEvents.UNKNOWN);
  }
});

export default router;
export { useRoute, useRouter } from "vue-router";
