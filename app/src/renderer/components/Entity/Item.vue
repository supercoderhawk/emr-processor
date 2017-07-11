<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ value }}</td>
    <td><v-select :value.sync="type" :options="options" options-value="val" justified close-on-select></v-select></td>
    <td>{{ start }}</td>
    <td>{{ end }}</td>
    <td>
      <a @click="remove"><span class="glyphicon glyphicon-remove"></span></a>
    </td>
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
        val: 3
      }
    },
    methods: {
      remove () {
        this.$store.dispatch('entity/removeItem', {
          id: this.id,
          value: this.value,
          type: this.type,
          start: this.start,
          end: this.end
        })
        this.$parent.$parent.editor.formatText(this.start, this.end - this.start + 1, 'color', 'black')
      }
    },
    props: ['id', 'value', 'type', 'start', 'end']
  }
</script>
