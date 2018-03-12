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
  ]
}

export const CONVERTER = {
  BASE_PATH: '/api/v1/db/129/note/',
  BASE_URL: 'https://saas.synyi.com',
  HOST: 'saas.synyi.com',
  INPUT_TYPES: [
    {val: 0, label: '一'},
    {val: 1, label: '二'}
  ],
  OUTPUT_TYPES: [
    {val: 0, label: '分词'},
    {val: 1, label: 'JSON'}
  ],
  KEY: '316WbbEsHIKpEXJN2eT8iQGoEVmQw2jL', // uk
  SIGN: 'CtbwqqzoTHFzbBN7A1mjL1Wd77WHjgHI' // ut
}
