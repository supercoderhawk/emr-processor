import * as types from '../mutation-types'
import {LIST} from '../../utils/constant'

const state = {
  items: LIST.INIT
}

const mutations = {
  [types.ADD_ITEM] (state, item) {
    state.items.splice(item.id, 0, item)
  },
  [types.REMOVE_ITEM] (state, item) {
    state.items.splice(item.id, 1)
  },
  [types.RESORT_ITEM] (state) {
    let items = state.items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== i) {
        items[i].id = i
      }
    }
  }
}

const actions = {
  addItem: ({ commit, state }, item) => {
    commit(types.ADD_ITEM, item)
    commit(types.RESORT_ITEM)
  },
  removeItem: ({commit, state}, item) => {
    commit(types.REMOVE_ITEM, item)
    commit(types.RESORT_ITEM)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
