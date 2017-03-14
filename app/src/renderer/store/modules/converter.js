import * as type from '../mutation-types'

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
  amount: 0
}

const mutations = {
  [type.ADD_RECORD] (state, record) {
    state.records.push(record)
  },

  [type.ADD_AMOUNT] (state) {
    state.amount ++
  }
}

export default {
  state,
  mutations
}
