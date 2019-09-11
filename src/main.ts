import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MyPlugin from './plugins/MyPlugin';
import 'amfe-flexible';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(MyPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
