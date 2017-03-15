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
    state.amount ++
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

export default {
  state,
  mutations
}
