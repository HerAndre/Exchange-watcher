import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.config.globalProperties.$filters = {
  monetize(v) {
    if (!v) return 0;
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
app.use(store).use(router).mount('#app');
axios.defaults.baseURL = '/api/';

