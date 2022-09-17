import Vue from 'vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/style/main.css"

Vue.use(Chakra)

new Vue({
  el: '#app',
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount()