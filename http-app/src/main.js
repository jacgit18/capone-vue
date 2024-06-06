import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './shared/BaseButton.vue'
import BaseCard from './shared/BaseCard.vue'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

app.mount('#app')
