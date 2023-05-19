import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";
import {ApolloClient, InMemoryCache} from '@apollo/client/core'
import {DefaultApolloClient} from '@vue/apollo-composable'
import VueDatePicker from '@vuepic/vue-datepicker';
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'



import "vue-awesome-paginate/dist/style.css";
import '@vuepic/vue-datepicker/dist/main.css'
import './index.css'
import './css/custom.css'

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
    cache,
    uri: 'http://51.159.168.89:3002/',
})

const app = createApp(App)

app.use(createPinia())
app.use(router as any)
app.use(VueAwesomePaginate)
app.provide(DefaultApolloClient, apolloClient)
app.component('VueDatePicker', VueDatePicker);
app.use(apolloProvider)
app.mount('#app')
