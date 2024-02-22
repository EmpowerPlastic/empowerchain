import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
import tracking, { type EventProperties } from "@/utils/analytics";

type PageViewEventWithProperties = (
  to: RouteLocationNormalized,
) => [PageNames, EventProperties];

declare module "vue-router" {
  interface RouteMeta {
    pageViewEvent?: PageNames | PageViewEventWithProperties;
    hideNavFooter?: boolean;
  }
}

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

export enum PageNames {
  START_PAGE = "start_page",
  CERTIFICATES = "certificates",
  FAQ = "faq",
  LISTINGS = "listings",
  LISTING = "listing",
  LOGIN_CALLBACK = "login_callback",
  USER_PROFILE = "user_profile",
  PAYMENT_SUCCESSFUL = "payment_successful",
  PAYMENT_CANCELLED = "payment_cancelled",
  REGISTRY = "registry",
  UNKNOWN = "unknown",
}

const router = createRouter({
  scrollBehavior: (to, from) => {
    // always scroll to top after navigation
    if (to.name === "FAQPage" && to.name === from.name) {
      return undefined;
    }
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: PageNames.START_PAGE,
      component: HomePage,
    },
    {
      path: "/certificate",
      name: PageNames.CERTIFICATES,
      component: CertificatesAndCreditsPage,
    },
    {
      path: "/faq",
      component: FAQPage,
    },
    {
      path: "/auction",
      name: PageNames.LISTINGS,
      component: AuctionPage,
    },
    {
      path: "/auction/:id",
      name: PageNames.LISTING,
      component: AuctionDetails,
      meta: {
        pageViewEvent: (to: RouteLocationNormalized) => {
          const trackProps = {
            id: to.params.id,
          };
          return [PageNames.LISTING, trackProps];
        },
      },
    },
    {
      path: "/callback",
      name: PageNames.LOGIN_CALLBACK,
      component: CallbackView,
      meta: {
        hideNavFooter: true, //To hide nav and footer on this page
      },
    },
    {
      path: "/profile",
      name: PageNames.USER_PROFILE,
      component: UserProfile,
    },
    {
      path: "/purchase-successful",
      name: PageNames.PAYMENT_SUCCESSFUL,
      component: AuctionPaymentSuccessful,
    },
    {
      path: "/purchase-cancelled",
      name: PageNames.PAYMENT_CANCELLED,
      component: AuctionPaymentCancelled,
    },
    {
      path: "/registry/:denom",
      name: PageNames.REGISTRY,
      component: CreditCollectionPage,
      meta: {
        pageViewEvent: (to: RouteLocationNormalized) => {
          const trackProps = {
            denom: to.params.denom,
          };
          return [PageNames.REGISTRY, trackProps];
        },
      },
    },
  ],
});

const trackPageView = (
  pageViewEvent: PageNames | PageViewEventWithProperties,
  to: RouteLocationNormalized,
) => {
  if (pageViewEvent && typeof pageViewEvent === "string") {
    tracking.pageViewEvent(pageViewEvent as PageNames);
  } else if (pageViewEvent && typeof pageViewEvent === "function") {
    const [eventName, eventProperties] = pageViewEvent(to);
    tracking.pageViewEvent(eventName, eventProperties);
  }
};

router.afterEach((to) => {
  const meta = to.meta;
  const pageViewEvent: PageNames | PageViewEventWithProperties =
    meta.pageViewEvent || (to.name as PageNames) || PageNames.UNKNOWN;
  trackPageView(pageViewEvent, to);
});

export default router;
export { useRoute, useRouter, RouterLink } from "vue-router";
