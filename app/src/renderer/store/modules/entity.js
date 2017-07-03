import * as types from '../mutation-types'
import {LIST} from '../../utils/constant'
import {isRangeValid} from '../../utils/utils'

const state = {
  items: LIST.INIT
}

const mutations = {
  [types.ADD_ITEM] (state, item, index) {
    state.items.splice(index, 0, item)
  }
}

const actions = {
  addItem: ({ commit, state }, item) => {
    let items = state.items
    if (isRangeValid(item.start, item.end, items)) {
      let itemCount = items.length
      let insertIndex = itemCount > 0 ? items.filter(curItem => { return curItem.end <= item.start }).length : 0
      commit(types.ADD_ITEM, item, insertIndex)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
