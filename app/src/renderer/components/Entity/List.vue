<template>
  <table class="table table-bordered table-hover table-condensed">
    <thead>
      <tr>
        <th>编号</th>
        <th>实体值</th>
        <th>实体类型</th>
        <th>开始位置</th>
        <th>结束位置</th>
      </tr>
    </thead>
    <tbody>
      <item  v-for="item in items" :id="item.id" :value="item.value"
             :type="item.type" :start="item.start" :end="item.end"></item>
    </tbody>
  </table>
</template>

<script>
  import item from './Item'

  export default{
    name: 'entity-list',
    components: {
      item
    },
    data: function () {
      return {
        items: [
          {
            id: 1,
            value: '我',
            type: '11',
            start: 0,
            end: 1
          }, {
            id: 2,
            value: '你',
            type: '22',
            start: 3,
            end: 4
          }
        ]
      }
    }

  }
</script>

<style>
  th, td{
    vertical-align: middle !important;
    text-align: center;
  }
</style>
