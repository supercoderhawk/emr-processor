import * as types from '../mutation-types'
import {LIST} from '../../utils/constant'

const state = {
  items: LIST.INIT
}

const mutations = {
  [types.ADD_ITEM] (state, item) {
    state.items.push(item)
  }
}

const actions = {
  addItem: ({ commit, state }, item) => {
    let items = state.items
    if (item.start > items[items.length - 1].end) {
      commit(types.ADD_ITEM, item)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
