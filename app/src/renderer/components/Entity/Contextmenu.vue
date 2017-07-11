<template>
  <ul class="dropdown-menu" :style="{left: left, top: top, display: this.display ? 'block' : 'none'}">
    <li><a v-for="option in options" :key="option.val" @click="select(option.val)">{{option.label}}</a></li>
  </ul>
</template>

<script>
  import {ITEM} from '../../utils/constant'

  export default {
    methods: {
      select (id) {
        this.$emit('selectCompleted', id)
      }
    },
    props: ['left', 'top', 'display'],
    data () {
      return {
        options: ITEM.OPTIONS
      }
    },
    name: 'contextmenu'
  }
</script>

<style>

</style>
