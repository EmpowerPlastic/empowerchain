import type { ComponentPublicInstance, Plugin as VuePlugin } from "vue";
import Rollbar from "rollbar";
import {
  ENVIRONMENT,
  REVISION_ID,
  ROLLBAR_ACCESS_TOKEN,
} from "@/config/config";
import { isTruthy } from "@/utils/utils";

type Severity =
  | "debug"
  | "info"
  | "notice"
  | "warning"
  | "error"
  | "critical"
  | "alert"
  | "emergency";

const shouldUseRemoteLogging = ENVIRONMENT !== "local";

const rollbar = shouldUseRemoteLogging
  ? new Rollbar({
      accessToken: ROLLBAR_ACCESS_TOKEN,
      captureUncaught: true,
      captureUnhandledRejections: true,
      environment: ENVIRONMENT,
      payload: {
        code_version: REVISION_ID,
      },
    })
  : null;

export const log = (
  err: any,
  severity: Severity = "error",
  params?: Record<string, any>,
): void => {
  if (shouldUseRemoteLogging) {
    if (rollbar !== null && isTruthy(rollbar?.error)) {
      rollbar.error(err, {
        context: {
          severity,
          params,
        },
      });
    }
  } else {
    switch (severity) {
      case "error":
        console.error("=== ERROR ===", err);
        break;
      default:
        console.log(`=== LOG - ${severity} ===`, err);
        break;
    }
  }
};

export const createAppLogger = (): VuePlugin => {
  return {
    install: (app) => {
      app.config.errorHandler = (err, instance, info) => {
        log(err, "error", { info });
      };
    },
  };
};
