import { createApp } from 'vue'
import App from './App.vue'
import PropsButton from '@/components/PropsExample.vue'

const app = createApp(App)
app.component('PropsButton', PropsButton)
app.mount('#app')

// createApp(App).mount('#app')
