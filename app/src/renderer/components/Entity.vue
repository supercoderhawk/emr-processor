<template>
    <div class="entity">
        <div class="dropdown">
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
        </div>
        <div class="text-wrapper">
            <bs-input ref="textarea" type="textarea" @dblclick.native="selectStart($event)"
                      @select.native="select($event)" v-model="text" readonly></bs-input>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 col-xs-lg-6">
            <quill-editor v-model="content2"
                          ref="myQuillEditor"
                          :options="editorOption"
                          @blur="onEditorBlur($event)"
                          @focus="onEditorFocus($event)"
                          @ready="onEditorReady($event)">
            </quill-editor>
            <vue-editor v-model="content"></vue-editor>
        </div>

        <list></list>
    </div>
</template>

<script>
  // import Vue from 'vue'
  import {input} from 'vue-strap'
  import list from './Entity/List'
  // import VueQuillEditor from 'vue-quill-editor'
  // Vue.use(VueQuillEditor)
  import VueQuillEditor from 'vue-quill-editor/src/editor'
  import {VueEditor} from 'vue2-editor'

  export default{
    components: {
      'bs-input': input,
      'list': list,
      VueEditor,
      'quill-editor': VueQuillEditor
    },
    data () {
      return {
        text: 'Texthhhhhhhhhhhhhhhhhhhhhhdfgdgfdfg',
        content: 'Textaaaaa',
        content2: 'This is a test',
        editorOption: {}
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
      },
      onEditorBlur (event) {

      },
      onEditorReady (event) {

      },
      onEditorFocus (event) {

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

    .ql-container {
        min-height: 20em;
        padding-bottom: 1em;
        max-height: 25em;
    }
</style>
