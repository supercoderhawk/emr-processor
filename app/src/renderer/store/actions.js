import * as types from './mutation-types'

export const addItem = ({ commit, state }, item) => {
  let items = state.entity.items
  if (item.start > items[items.length - 1].end) {
    commit(types.ADD_ITEM, item)
  }
}

export const addRecord = ({ commit, state }, hash, name, plainText, jsonText) => {
  let record = {
    id: state.converter.amount,
    hash,
    name,
    plainText,
    jsonText
  }

  commit(types.ADD_RECORD, record)
  commit(types.ADD_AMOUNT)
}
