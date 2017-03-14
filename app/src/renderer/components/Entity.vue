<template>
  <div>
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        下拉菜单按钮
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li class="dropdown-header">菜单头</li>
        <li><a href="#">菜单1</a></li>
        <li><a href="#">菜单2</a></li>
        <li><a href="#">菜单3</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">菜单4</a></li>
      </ul>
    </div>
    <div class="text-wrapper">
      <bs-input ref="textarea" type="textarea" @dblclick.native="selectStart($event)" @select.native="select($event)" v-model="text" readonly></bs-input>
    </div>
    <list></list>
  </div>
</template>

<script>
  import {input} from 'vue-strap'
  import list from './Entity/List'
  // import store from '../store/index'

  export default{
    components: {
      'bs-input': input,
      'list': list
    },
    data () {
      return {
        text: 'Texthhhhhhhhhhhhhhhhhhhhhhdfgdgfdfg'
      }
    },
    methods: {
      select (event) {
        // 获取选中数据
        let start = event.target.selectionStart
        let end = event.target.selectionEnd
        let text = this.text.slice(start, end)
        console.log(text)
        this.$store.dispatch('addItem', {
          id: start,
          value: text,
          type: 1,
          start,
          end
        })
      },
      selectStart (event) {
        console.log(this.$store)
        return false
      }
    },
    // store,
    name: 'entity'
  }
</script>

<style>
  textarea{
    font-size: 24px !important;
    width: 400px !important;
  }
</style>
