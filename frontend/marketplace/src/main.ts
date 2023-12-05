import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomePaginate from "vue-awesome-paginate";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";
import VueDatePicker from "@vuepic/vue-datepicker";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import Rollbar from "rollbar";
// import { initGlobalStores } from "./stores";
import "vue-awesome-paginate/dist/style.css";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue3-toastify/dist/index.css";
import "./index.css";
import "./css/custom.css";
import {
  API_ENDPOINT,
  ENVIRONMENT,
  LOGTO_APP_ID,
  LOGTO_ENDPOINT,
  REVISION_ID,
  ROLLBAR_ACCESS_TOKEN,
  PC_BACKEND_ENDPOINT,
} from "@/config/config";
import { createLogto, type LogtoConfig } from "@logto/vue";

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: API_ENDPOINT,
});

const app = createApp(App);
const logtoConfig: LogtoConfig = {
  endpoint: LOGTO_ENDPOINT,
  appId: LOGTO_APP_ID,
  scopes: ["email"],
  resources: [PC_BACKEND_ENDPOINT],
};

app.use(createLogto, logtoConfig);

app.use(router as any);
app.use(VueAwesomePaginate);

app.component("VueDatePicker", VueDatePicker);
app.provide(DefaultApolloClient, apolloClient);
app.use(Vue3Toastify, {
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
provideApolloClient(apolloClient);
