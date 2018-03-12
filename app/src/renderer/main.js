import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'

import App from './App'

Vue.use(Electron)
Vue.use(Resource)
Vue.config.debug = true

new Vue({
  ...App
}).$mount('#app')
