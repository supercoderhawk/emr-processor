import {ADD_ITEM} from '../mutation-types'
import {LIST} from '../../utils/constant'

const state = {
  items: LIST.INIT
}

const mutations = {
  [ADD_ITEM] (state, item) {
    state.items.push(item)
  }
}

export default {
  state,
  mutations
}
