<template>
  <relation-panel></relation-panel>
</template>

<script>
  import RelationPanel from './Relation/RelationPanel'
  export default {
    components: {RelationPanel},
    name: 'relation'
  }
</script>

<style>
  .a > p {
    background-color: red;
  }
</style>
