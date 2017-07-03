import * as types from '../mutation-types'

const state = {
  records: [
    {
      'id': 0,
      'hash': '123',
      'plainText': '',
      'jsonText': '{"a":1}',
      'name': '病历'
    }
  ],
  amount: 1,
  plainText: '纯文本',
  jsonText: '{"a":1}'
}

const mutations = {
  [types.ADD_RECORD] (state, record) {
    state.records.push(record)
  },
  [types.ADD_AMOUNT] (state) {
    state.amount++
  },
  [types.REMOVE_ALL_RECORDS] (state) {
    let records = state.records
    records.splice(0, records.length)
    state.amount = 0
  },
  [types.MODIFY_PLAIN_IN_DISPLAY] (state, text) {
    state.plainText = text
  },
  [types.MODIFY_JSON_IN_DISPLAY] (state, text) {
    state.jsonText = text
  }
}

const actions = {
  addRecord: ({ commit, state }, recItem) => {
    let record = {
      id: state.converter.amount,
      hash: recItem.hash,
      name: recItem.name,
      plainText: recItem.plainText,
      jsonText: recItem.jsonText
    }

    commit(types.ADD_RECORD, record)
    commit(types.ADD_AMOUNT)
  },
  removeAllRecords: ({commit}) => {
    commit(types.REMOVE_ALL_RECORDS)
  },
  modifyText: ({commit}, {plainText, jsonText}) => {
    commit(types.MODIFY_PLAIN_IN_DISPLAY, plainText)
    commit(types.MODIFY_JSON_IN_DISPLAY, jsonText)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
