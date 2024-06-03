import './assets/base.css'
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VeeValidatePlugin from './includes/validation'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
