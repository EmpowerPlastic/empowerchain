import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";
import Rollbar from "rollbar";
import "vue3-toastify/dist/index.css";
import "./css/custom.css";
import {
  ENVIRONMENT,
  REVISION_ID,
  ROLLBAR_ACCESS_TOKEN,
} from "./config/config";
const app = createApp(App);
app.use(router);
app.use(Vue3Toasity, {
  autoClose: 3000,
} as ToastContainerOptions);

if (ENVIRONMENT && ENVIRONMENT !== "local") {
  const rollbar = new Rollbar({
    accessToken: ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: ENVIRONMENT,
    payload: {
      code_version: REVISION_ID,
    },
  });
  app.config.errorHandler = (err, vm, info) => {
    rollbar.error(err as any);
    throw err;
  };
  app.config.globalProperties.$rollbar = rollbar;
}

app.mount("#app");
