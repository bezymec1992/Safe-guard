import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/scss/styles.scss';

createApp(App).use(router).mount('#app')
