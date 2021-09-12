import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'modern-normalize';
import './assets/css/main.css';

createApp(App).use(router).mount('#app');
