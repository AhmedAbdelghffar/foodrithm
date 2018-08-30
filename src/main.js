import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import { routes } from './routes'
import VueSuperagent from 'vue-superagent'
import store from './store/store.js'


Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(VueSuperagent);

const http=Vue.http;
export default http;

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
