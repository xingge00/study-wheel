import { createApp } from 'vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import App from '@/App.vue'
import router from '@/router'
import { setupStore } from '@/store'
import setupDirectives from '@/directive/index.js'
import '@/styles/index.scss'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'

const app = createApp(App)
app.use(hljsVuePlugin)
setupStore(app)
setupDirectives(app)
app.use(router)
app.mount('#app')
