import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
import tracking, { type EventProperties } from "@/utils/analytics";
import { PageNames } from "./pageNames";

type PageViewEventWithProperties = (
  to: RouteLocationNormalized,
) => [PageNames, EventProperties];

const HomePage = () => import("@/pages/HomePage.vue");
const FAQPage = () => import("@/pages/FAQPage.vue");
const CertificatesAndCreditsPage = () =>
  import("@/pages/CertificatesAndCreditsPage.vue");
const ListingsPage = () => import("@/pages/ListingsPage.vue");
const ListingPage = () => import("@/pages/ListingPage.vue");
const LoginCallbackPage = () => import("@/pages/LoginCallbackPage.vue");
const UserProfilePage = () => import("@/pages/UserProfilePage.vue");
const PaymentSuccessfulPage = () => import("@/pages/PaymentSuccessfulPage.vue");
const PaymentCancelledPage = () => import("@/pages/PaymentCancelledPage.vue");
const CreditCollectionPage = () => import("@/pages/CreditCollectionPage.vue");

export { PageNames };

const router = createRouter({
  scrollBehavior: (to, from) => {
    // always scroll to top after navigation
    if (to.name === PageNames.FAQ && to.name === from.name) {
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
      name: PageNames.FAQ,
      component: FAQPage,
    },
    {
      path: "/projects",
      name: PageNames.LISTINGS,
      component: ListingsPage,
    },
    {
      path: "/projects/:id",
      name: PageNames.LISTING,
      component: ListingPage,
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
      component: LoginCallbackPage,
      meta: {
        hideNavFooter: true, //To hide nav and footer on this page
      },
    },
    {
      path: "/profile",
      name: PageNames.USER_PROFILE,
      component: UserProfilePage,
    },
    {
      path: "/purchase-successful",
      name: PageNames.PAYMENT_SUCCESSFUL,
      component: PaymentSuccessfulPage,
    },
    {
      path: "/purchase-cancelled",
      name: PageNames.PAYMENT_CANCELLED,
      component: PaymentCancelledPage,
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
