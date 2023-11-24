import './assets/main.css'
import 'semantic-ui-css/semantic.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'

import App from './App.vue'


const app = createApp(App)

const emitter = mitt()

app.config.globalProperties.emitter = emitter

app.use(createPinia())


app.mount('#app')
