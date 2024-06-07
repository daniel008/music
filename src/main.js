import { createPinia } from 'pinia'
import { createApp } from 'vue'

import './assets/base.css'
import './assets/main.css'
import { auth } from './includes/firebase'

import VeeValidatePlugin from './includes/validation'

import App from './App.vue'
import router from './router'

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)

    app.mount('#app')
  }
})
