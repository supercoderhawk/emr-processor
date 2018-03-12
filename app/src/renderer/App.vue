<template>
  <div id="#app">
    <tabs>
      <tab header="实体标注">
        <entity></entity>
      </tab>
      <tab header="关系标注">
        <relation></relation>
      </tab>
    </tabs>
  </div>
</template>

<script>
  import store from './store/index'
  import {tabs, tab} from 'vue-strap'
  import entity from './components/Entity'
  import relation from './components/Relation'

  export default {
    store,
    components: {
      entity,
      relation,
      tabs,
      tab
    },
    name: 'App'
  }
</script>

<style>

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {

  }

</style>
