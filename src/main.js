import './assets/main.scss'
import {createPinia} from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "echarts";

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia)
app.mount('#app')
