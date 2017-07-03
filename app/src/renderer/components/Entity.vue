<template>
  <div class="entity">
    <!--<div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true">
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
    </div>-->
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
        content: 'Textaaaaa'
      }
    },
    computed: {
      editor () {
        return this.$refs.editor.quill
      }
    },
    methods: {
      selectContent (start, end, text) {
        if (isRangeValid(start, end, this.$store.state.entity.items)) {
          this.$store.dispatch('entity/addItem', {
            id: start,
            value: text,
            type: 1,
            start,
            end
          })
          console.log(text)
          this.editor.format('color', 'red')
        }
      }
    },
    name: 'entity'
  }
</script>

<style>
  .entity textarea {
    font-size: 24px;
    width: 400px;
  }

</style>
