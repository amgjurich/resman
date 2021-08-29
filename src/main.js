import { createApp } from 'vue';
import App from './App.vue';
//automatically imports the index
import router from './router';

createApp(App)
  .use(router)

  .mount('#app');
