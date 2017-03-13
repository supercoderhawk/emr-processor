<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ value }}</td>
    <td><v-select :value.sync="val" :options="options" options-value="val" justified close-on-select></v-select></td>
    <td>{{ start }}</td>
    <td>{{ end }}</td>
  </tr>
</template>

<script>
  import {select} from 'vue-strap'
  import {ITEM} from '../../utils/constant'

  export default {
    name: 'entity-item',
    components: {
      'v-select': select
    },
    data () {
      return {
        options: ITEM.OPTIONS,
        val: 1
      }
    },
    props: ['id', 'value', 'type', 'start', 'end']
  }
</script>
