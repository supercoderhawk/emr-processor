<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ value }}</td>
    <td><v-select :value.sync="val" :options="options" options-value="val" justified  close-on-select></v-select></td>
    <td>{{ start }}</td>
    <td>{{ end }}</td>
  </tr>
</template>

<script>
  import {select} from 'vue-strap'
  export default {
    name: 'entity-item',
    components: {
      'v-select': select
    },
    data: function () {
      return {
        options: [
          {val: 0, label: '指标'},
          {val: 1, label: '症状'},
          {val: 2, label: '部位'},
          {val: 3, label: '药物'},
          {val: 4, label: '治疗'},
          {val: 5, label: '疾病'},
          {val: 6, label: '检查'}
        ],
        val: 1
      }
    },
    props: ['id', 'value', 'type', 'start', 'end']
  }
</script>
