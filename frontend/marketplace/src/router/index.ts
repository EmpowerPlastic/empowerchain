import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
import tracking, {
  PageViewEvents,
  type EventProperties,
} from "@/utils/analytics";
import { RouteNames } from "./RouteNames";

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

export const PageNames = RouteNames.toSnakeCase();
type PageNamesValues = (typeof PageNames)[keyof typeof PageNames];

type PageViewEventWithProperties = (
  to: RouteLocationNormalized,
) => [PageNamesValues, EventProperties];
export {};

declare module "vue-router" {
  interface RouteMeta {
    pageViewEvent?: string | PageViewEventWithProperties;
    hideNavFooter?: boolean;
  }
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
      meta: {
        pageViewEvent: PageViewEvents.START_PAGE,
      },
    },
    {
      path: "/certificate",
      name: PageNames.CERTIFICATES,
      component: CertificatesAndCreditsPage,
      meta: {
        pageViewEvent: PageViewEvents.CERTIFICATES,
      },
    },
    {
      path: "/faq",
      name: PageNames.FAQ,
      component: FAQPage,
      meta: {
        pageViewEvent: PageViewEvents.FAQ,
      },
    },
    {
      path: "/auction",
      name: PageNames.LISTINGS,
      component: AuctionPage,
      meta: {
        pageViewEvent: PageViewEvents.LISTINGS,
      },
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
          return [PageViewEvents.LISTING, trackProps];
        },
      },
    },
    {
      path: "/callback",
      name: PageNames.LOGIN_CALLBACK,
      component: CallbackView,
      meta: {
        hideNavFooter: true, //To hide nav and footer on this page
        pageViewEvent: PageViewEvents.LOGIN_CALLBACK,
      },
    },
    {
      path: "/profile",
      name: PageNames.USER_PROFILE,
      component: UserProfile,
      meta: {
        pageViewEvent: PageViewEvents.USER_PROFILE,
      },
    },
    {
      path: "/purchase-successful",
      name: PageNames.PAYMENT_SUCCESSFUL,
      component: AuctionPaymentSuccessful,
      meta: {
        pageViewEvent: PageViewEvents.PAYMENT_SUCCESSFUL,
      },
    },
    {
      path: "/purchase-cancelled",
      name: PageNames.PAYMENT_CANCELLED,
      component: AuctionPaymentCancelled,
      meta: {
        pageViewEvent: PageViewEvents.PAYMENT_CANCELLED,
      },
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
          return [PageViewEvents.REGISTRY, trackProps];
        },
      },
    },
  ],
});

const trackPageView = (
  pageViewEvent: string | PageViewEventWithProperties,
  to: RouteLocationNormalized,
) => {
  if (pageViewEvent && typeof pageViewEvent === "string") {
    tracking.pageViewEvent(pageViewEvent);
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
export { useRoute, useRouter, RouterLink } from "vue-router";
