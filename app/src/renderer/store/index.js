import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import index from './modules/index'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    index,
    list
  },
  strict: process.env.NODE_ENV !== 'production'
})
