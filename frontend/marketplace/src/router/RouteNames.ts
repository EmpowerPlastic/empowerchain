type RouteNamesKeys = Exclude<
  keyof typeof RouteNames,
  "prototype" | "toSnakeCase" | "toOriginalCase"
>;

export class RouteNames {
  static START_PAGE = "start page";
  static CERTIFICATES = "certificates";
  static FAQ = "faq";
  static LISTINGS = "listings";
  static LISTING = "listing";
  static LOGIN_CALLBACK = "login callback";
  static USER_PROFILE = "user profile";
  static PAYMENT_SUCCESSFUL = "payment successful";
  static PAYMENT_CANCELLED = "payment cancelled";
  static REGISTRY = "registry";
  static UNKNOWN = "unknown";

  static toSnakeCase() {
    return (Object.getOwnPropertyNames(RouteNames) as RouteNamesKeys[]).reduce(
      (acc, key) => {
        if (typeof RouteNames[key] === "string") {
          acc[key] = RouteNames[key].replace(/ /g, "_");
        }
        return acc;
      },
      {} as Record<RouteNamesKeys, string>,
    );
  }

  static toOriginalCase() {
    return (Object.getOwnPropertyNames(RouteNames) as RouteNamesKeys[]).reduce(
      (acc, key) => {
        if (typeof RouteNames[key] === "string") {
          acc[key] = RouteNames[key];
        }
        return acc;
      },
      {} as Record<RouteNamesKeys, string>,
    );
  }
}
