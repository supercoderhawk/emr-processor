export default [
  {
    path: '/',
    name: 'entity',
    component: require('components/Entity')
  },
  {
    path: '*',
    redirect: '/'
  }
]
