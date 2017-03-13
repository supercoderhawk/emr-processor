import * as types from './mutation-types'

export const addItem = ({ commit }, item) => {
  commit(types.ADD_ITEM, item)
}
