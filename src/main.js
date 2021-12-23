import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Admin from './pages/Admin.vue'
import Home from './pages/Home.vue'
import './assets/tailwind.css'
import store from '../src/store/index.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [
  { path: '/admin', component: Admin},
  { path: '/', component: Home},
];
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store: store(),
}).$mount('#app')
