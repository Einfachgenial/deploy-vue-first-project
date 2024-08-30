import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

// Add Routing and store from vuex 
app.use(router)
app.use(store)

app.mount('#app')


