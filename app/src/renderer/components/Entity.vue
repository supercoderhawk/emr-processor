<template>
  <div class="entity">
    <vue-editor v-model="content" ref="editor" @select="selectContent"></vue-editor>
    <list></list>
  </div>
</template>

<script>
  import list from './Entity/List'
  import VueEditor from './VueEditor'
  import {isRangeValid} from '../utils/utils'

  export default{
    components: {
      'list': list,
      VueEditor
    },
    data () {
      return {
        content: 'Textaaaaa啊啊啊啊啊啊'
      }
    },
    computed: {
      editor  () {
        return this.$refs.editor.quill
      }
    },
    methods: {
      selectContent (start, end, text) {
        let items = this.$store.state.entity.items
        if (isRangeValid(start, end, items)) {
          let insertIndex = items.length > 0 ? items.filter(curItem => { return curItem.end < start }).length : 0
          this.$store.dispatch('entity/addItem', {
            id: insertIndex,
            value: text,
            type: 1,
            start,
            end
          })
          // console.log(text)
          this.editor.format('color', 'red')
          this.editor.blur()
        }
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
