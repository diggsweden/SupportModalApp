import './assets/main.css'

import { createApp } from 'vue'
import i18n from './i18n'
import eventBus from './services/eventBus.js'
import App from './App.vue'

const app = i18n(createApp(App))

app.config.globalProperties.emitter = eventBus;

app.mount('#app')
