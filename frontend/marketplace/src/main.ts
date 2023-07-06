import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueAwesomePaginate from "vue-awesome-paginate";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";
import VueDatePicker from "@vuepic/vue-datepicker";
import { VueHtmlToPaper } from "vue-html-to-paper";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import Rollbar from "rollbar";
import "vue-awesome-paginate/dist/style.css";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue3-toastify/dist/index.css";
import "./index.css";
import "./css/custom.css";
import {
  API_ENDPOINT,
  ENVIRONMENT,
  REVISION_ID,
  ROLLBAR_ACCESS_TOKEN,
} from "@/config/config";

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
};

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: API_ENDPOINT,
});

const app = createApp(App);

app.use(createPinia());
app.use(router as any);
app.use(VueAwesomePaginate);
app.use(VueHtmlToPaper, options);
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
