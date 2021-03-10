import Vue from 'vue';
import store from './store';
import App from './App.vue';
import Axios from "axios";
import VueRouter from "vue-router";
import session from "vue-session";
import router from './router';
import './assets/css/style.css';

Vue.use(VueRouter);
Vue.use(session);
Vue.config.productionTip = false
Vue.prototype.http = Axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
