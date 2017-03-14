export default [
  {
    path: '/entity',
    name: 'entity',
    component: require('components/Entity')
  },
  {
    path: '/converter',
    name: 'converter',
    component: require('components/Converter')
  },
  {
    path: '/',
    redirect: '/entity'
  }
]
