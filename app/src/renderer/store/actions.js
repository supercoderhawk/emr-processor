import * as types from './mutation-types'

export const addItem = ({ commit, state }, item) => {
  let items = state.entity.items
  if (item.start > items[items.length - 1].end) {
    commit(types.ADD_ITEM, item)
  }
}
