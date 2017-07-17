<template>
  <div class="entity">
    <vue-editor v-model="content" ref="editor" @select="selectContent"></vue-editor>
    <list></list>
    <contextmenu ref="menu" :left="left" :top="top" :display="display" v-on:selectCompleted="selectCompleted"></contextmenu>
  </div>
</template>

<script>
  import list from './Entity/List'
  import contextmenu from './Entity/Contextmenu'
  import VueEditor from './VueEditor'
  import {isRangeValid, getOffset} from '../utils/utils'

  export default{
    components: {
      list,
      contextmenu,
      VueEditor
    },
    data () {
      return {
        content: 'Textaaaaa啊啊啊啊啊啊',
        curItem: null,
        leftValue: 0,
        topValue: 0,
        display: false
      }
    },
    computed: {
      editor  () {
        return this.$refs.editor.quill
      },
      menu () {
        return this.$ref.menu
      },
      left: {
        get: function () {
          return this.leftValue + 'px'
        },
        set: function (value) {
          this.leftValue = value
        }
      },
      top: {
        get: function () {
          return this.topValue + 'px'
        },
        set: function (value) {
          this.topValue = value
        }
      }
    },
    methods: {
      selectContent (start, end, text) {
        let items = this.$store.state.entity.items
        if (isRangeValid(start, end, items)) {
          let insertIndex = items.length > 0 ? items.filter(curItem => { return curItem.end < start }).length : 0
          this.curItem = {id: insertIndex, value: text, type: 1, start, end}
          // console.log(text)
          this.editor.format('color', 'red')
          let bound = this.editor.getBounds(start, end - start + 1)
          let rootBound = getOffset(this.editor.root)
          this.left = bound.right + rootBound.left + 10
          this.top = bound.top + rootBound.top
          this.display = true
          // this.editor.blur()
        }
      },
      selectCompleted (type) {
        this.curItem.type = type
        this.$store.dispatch('entity/addItem', this.curItem)
        this.display = false
      }
    },
    name: 'entity'
  }
</script>

<style>
  .entity textarea {
    font-size: 24px;
    width: 300px;
  }
</style>
