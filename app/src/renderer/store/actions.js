import * as types from './mutation-types'

export const addItem = ({ commit, state }, item) => {
  let items = state.entity.items
  if (item.start > items[items.length - 1].end) {
    commit(types.ADD_ITEM, item)
  }
}

export const addRecord = ({ commit, state }, recItem) => {
  let record = {
    id: state.converter.amount,
    hash: recItem.hash,
    name: recItem.name,
    plainText: recItem.plainText,
    jsonText: recItem.jsonText
  }

  commit(types.ADD_RECORD, record)
  commit(types.ADD_AMOUNT)
}

export const removeAllRecords = ({commit}) => {
  commit(types.REMOVE_ALL_RECORDS)
}

export const modifyText = ({commit}, {plainText, jsonText}) => {
  commit(types.MODIFY_PLAIN_IN_DISPLAY, plainText)
  commit(types.MODIFY_JSON_IN_DISPLAY, jsonText)
}
