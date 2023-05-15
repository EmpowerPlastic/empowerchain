import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css";
import './index.css'
import './css/custom.css'


const app = createApp(App)

app.use(createPinia())
app.use(router as any)

app.use(VueAwesomePaginate)
app.mount('#app')
