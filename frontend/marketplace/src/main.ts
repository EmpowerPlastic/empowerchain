import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";
import VueDatePicker from '@vuepic/vue-datepicker';

import "vue-awesome-paginate/dist/style.css";
import '@vuepic/vue-datepicker/dist/main.css'
import './index.css'
import './css/custom.css'


const app = createApp(App)

app.use(createPinia())
app.use(router as any)

app.use(VueAwesomePaginate)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
