import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CustomToast from './plugins/CustomToast'
const app = createApp(App)
app.use(CustomToast, {})
app.mount('#app')
