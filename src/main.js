import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/style/main.css"

import "bootstrap-icons/font/bootstrap-icons.css"
import store from './store/strage';

import 'vue-search-select/dist/VueSearchSelect.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')