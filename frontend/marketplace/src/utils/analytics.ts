import { SEGMENT_WRITE_KEY } from "@/config/config";
import {
  AnalyticsBrowser,
  type UserTraits,
  type EventProperties,
} from "@segment/analytics-next";

interface EventsOptions {
  trackEvents: EventProperties;
  pageViewEvents: EventProperties;
}

/**
 * @description Initialize Segment
 * @example init();
 */
export const initTracking = (
  writeKey: string,
  eventsArg: Partial<EventsOptions>,
) => {
  const events: EventsOptions = {
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
  const isValidEvent = <T>(value: T, eventEnum: object): value is T => {
    return Object.values(eventEnum).includes(value);
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
      console.log("Not a valid page view event");
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
      console.error("Error logging event", error);
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
}

export enum PageViewEvents {
  PLASTIC_CREDIT_COLLECTION = "plastic credit collection",
}

const tracking = initTracking(SEGMENT_WRITE_KEY, {
  pageViewEvents: PageViewEvents,
  trackEvents: TrackEvents,
});

export default tracking;
