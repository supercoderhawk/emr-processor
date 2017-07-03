import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index'
import entity from './modules/entity'
import relation from './modules/relation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index,
    entity,
    relation
  },
  strict: process.env.NODE_ENV !== 'production'
})
