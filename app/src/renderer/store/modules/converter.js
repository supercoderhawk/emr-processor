import * as types from '../mutation-types'

const state = {
  records: [
    {
      'id': 0,
      'hash': '123',
      'plainText': '',
      'jsonText': '',
      'name': '病历'
    }
  ],
  amount: 1
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
  }
}

export default {
  state,
  mutations
}
