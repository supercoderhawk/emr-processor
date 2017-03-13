<template>
  <div id="#app">
    <navbar placement="top" type="default">
      <!-- Brand as slot -->
      <a slot="brand" href="/" title="Home" class="navbar-brand">Usst IMIE</a>

      <li><a href="#">实体标注</a></li>
      <li><a href="#">关系标注</a></li>
      <li><a href="#">数据转换</a></li>

    </navbar>

    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  import {navbar} from 'vue-strap'
  export default {
    store,
    components: {
      navbar
    }
  }
</script>

<style>

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {

  }

</style>
