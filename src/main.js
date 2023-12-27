import './assets/main.css'

import { createApp } from 'vue'

import mitt from 'mitt'

import App from './App.vue'

const app = createApp(App)

const emitter = mitt()

app.config.globalProperties.emitter = emitter

app.mount('#app')
