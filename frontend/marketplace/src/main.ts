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
import "vue-awesome-paginate/dist/style.css";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue3-toastify/dist/index.css";
import "./index.css";
import "./css/custom.css";
import {
  API_ENDPOINT,
  LOGTO_APP_ID,
  LOGTO_ENDPOINT,
  PC_BACKEND_ENDPOINT,
} from "@/config/config";
import { createLogto, type LogtoConfig } from "@logto/vue";
import "@/utils/analytics";
import { createAppLogger } from "@/utils/logger";
import { createHead } from "@unhead/vue";

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: API_ENDPOINT,
});

const app = createApp(App);
const head = createHead();
app.use(head);

const logtoConfig: LogtoConfig = {
  endpoint: LOGTO_ENDPOINT,
  appId: LOGTO_APP_ID,
  scopes: ["email", "custom_data"],
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

//Rollbar
const appLogger = createAppLogger();
app.use(appLogger);

app.mount("#app");
provideApolloClient(apolloClient);
