import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";
import {ApolloClient, InMemoryCache} from '@apollo/client/core'
import {DefaultApolloClient, provideApolloClient} from '@vue/apollo-composable'
import VueDatePicker from '@vuepic/vue-datepicker';

import "vue-awesome-paginate/dist/style.css";
import '@vuepic/vue-datepicker/dist/main.css'
import './index.css'
import './css/custom.css'
import {API_ENDPOINT} from "@/config/config";

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
    cache,
    uri: API_ENDPOINT,
})

const app = createApp(App)

app.use(createPinia())
app.use(router as any)
app.use(VueAwesomePaginate)
app.component('VueDatePicker', VueDatePicker);
app.provide(DefaultApolloClient, apolloClient)
app.mount('#app')
provideApolloClient(apolloClient)