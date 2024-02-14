import { SEGMENT_WRITE_KEY } from "@/config/config";
import {
  AnalyticsBrowser,
  type UserTraits,
  type EventProperties,
} from "@segment/analytics-next";
interface EventNames {
  trackEvents: Record<string, string>;
  pageViewEvents: Record<string, string>;
}

/**
 * @description Initialize Segment
 * @example init();
 */
export const initTracking = (
  writeKey: string,
  eventsArg: Partial<EventNames>,
) => {
  const events: EventNames = {
    trackEvents: eventsArg.trackEvents ? { ...eventsArg.trackEvents } : {},
    pageViewEvents: eventsArg.pageViewEvents
      ? { ...eventsArg.pageViewEvents }
      : {},
  };

  const analytics = new AnalyticsBrowser();

  /**
   * @description Check if an event is valid
   * @param value
   * @param eventEnum
   * @returns boolean
   */
  const isValidEvent = (
    eventName: string,
    eventNames: typeof events.trackEvents | typeof events.pageViewEvents,
  ): boolean => {
    return Object.values(eventNames).includes(eventName);
  };

  /**
   * @description Identify a user
   * @param userId
   * @param userProperties
   *
   * @example identify("1234", { name: "John Doe" });
   */
  const identify = (userId: string, userProperties?: UserTraits) => {
    try {
      analytics.identify(userId, userProperties);
    } catch (error) {
      console.error("Error identifying user", error);
    }
  };

  /**
   * @description Track an event
   * @param eventName
   * @param eventProperties
   *
   * @example trackEvent("Listing Viewed", { listingId: "1234" });
   */
  const trackEvent = (
    eventName: TrackEvents,
    eventProperties?: EventProperties,
  ) => {
    if (!isValidEvent(eventName, events.trackEvents)) {
      console.log("Not a valid tracking event");
      return;
    }
    try {
      analytics.track(eventName, eventProperties);
    } catch (error) {
      console.error("Error tracking event", error);
    }
  };

  /**
   * @description Log an event
   * @param eventName
   * @param eventProperties
   *
   * @example pageViewEvent("Listing Viewed", { listingId: "1234" });
   */
  const pageViewEvent = (
    eventName: PageViewEvents,
    eventProperties?: EventProperties,
  ) => {
    if (!isValidEvent(eventName, events.pageViewEvents)) {
      console.log("Not a valid page view event");
      return;
    }
    try {
      analytics.page(eventName, eventProperties);
    } catch (error) {
      console.error("Error tracking page view event", error);
    }
  };

  try {
    analytics.load({ writeKey });
  } catch (error) {
    console.error("Error initializing Segment", error);
  }

  /**
   * @description Export analytics functions
   */
  return {
    identify,
    trackEvent,
    pageViewEvent,
  };
};

export enum TrackEvents {
  CLICKED_PAYMENT_BUTTON = "Clicked payment button",
  CLICKED_SEE_CERTIFICATES = "Clicked see certificates",
  CLICKED_VIEW_DETAILS = "Clicked view details",
  CLICKED_LOGIN = "Clicked login",
  CLICKED_GET_MPWR = "Clicked get mpwr",
}

export enum PageViewEvents {
  START_PAGE = "start page",
  CERTIFICATES = "certificates",
  FAQ = "faq",
  PLASTIC_CREDIT_LISTINGS = "plastic credit listings",
  PLASTIC_CREDIT_LISTING = "plastic credit listing",
  LOGIN_CALLBACK = "login callback",
  USER_PROFILE = "user profile",
  PAYMENT_SUCCESSFUL = "payment successful",
  PAYMENT_CANCELLED = "payment cancelled",
  REGISTRY = "registry",
  UNKNOWN = "unknown",
}

const tracking = initTracking(SEGMENT_WRITE_KEY, {
  pageViewEvents: PageViewEvents,
  trackEvents: TrackEvents,
});

export default tracking;
export type { EventProperties };
