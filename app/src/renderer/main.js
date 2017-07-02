import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'

import App from './App'

Vue.use(Electron)
Vue.use(Resource)
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  ...App
})
