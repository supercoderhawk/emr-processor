export const ITEM = {
  OPTIONS: [
    {val: 0, label: '指标'},
    {val: 1, label: '症状'},
    {val: 2, label: '部位'},
    {val: 3, label: '药物'},
    {val: 4, label: '治疗'},
    {val: 5, label: '疾病'},
    {val: 6, label: '检查'}
  ]
}

export const LIST = {
  INIT: [
    {
      id: 1,
      value: '我',
      type: '11',
      start: 0,
      end: 1
    }, {
      id: 2,
      value: '你',
      type: '22',
      start: 3,
      end: 4
    }
  ]
}

export const CONVERTER = {
  BASE_URL: 'https://saas.synyi.com/api/v1/db/129/note/',
  TEST_URL: 'https://saas.synyi.com/api/v1/db/129/note/14fe5761c6c540093e44bc4b',
  HOST: 'saas.synyi.com',
  INPUT_TYPES: [
    {val: 0, label: '一'},
    {val: 1, label: '二'}
  ],
  OUTPUT_TYPES: [
    {val: 0, label: '分词'},
    {val: 1, label: 'JSON'}
  ],
  KEY: 'crc6WykJIQRfD5jeE3QOOvZFDDVcCtkx',
  SIGN: 'lGKO06JXdSwQ2Oou6easL7BWcJxn5sSe'
}
