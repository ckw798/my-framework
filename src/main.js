import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'
import ElementPlus from 'element-plus'
import '@unocss/reset/tailwind.css'
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.mount('#app')
