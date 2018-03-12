<template>
  <div class="quillWrapper">
    <div ref="quillContainer" :id="id" @mouseup.native="mouseup" @mousedown.native="mousedown($event)"></div>
  </div>
</template>
<script>
  import Quill from 'quill'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'

  export default {
    name: 'vue-editor',
    props: {
      value: String,
      id: {
        type: String,
        'default': 'quill-container'
      },
      placeholder: String,
      disabled: Boolean
    },

    data () {
      return {
        quill: null,
        editor: null,
        selection: '',
        left: 0,
        top: 0
      }
    },

    mounted () {
      this.initializeVue2Editor()
    },

    watch: {
      value (val) {
        if (val !== this.editor.innerHTML && !this.quill.hasFocus()) {
          this.editor.innerHTML = val
        }
      },
      disabled (status) {
        this.quill.enable(!status)
      }
    },

    methods: {
      initializeVue2Editor () {
        this.setQuillElement()
        this.setEditorElement()
        this.checkForInitialContent()
      },

      setQuillElement () {
        let self = this
        this.quill = new Quill(this.$refs.quillContainer, {
          modules: {
            toolbar: false
          },
          placeholder: this.placeholder ? this.placeholder : '',
          theme: 'snow',
          readOnly: this.disabled ? this.disabled : false
        })
        this.quill.format('size', '20px')
        this.quill.on('selection-change', function (range, oldRange, source) {
          if (range) {
            if (range.length === 0) {
              self.selection = ''
            } else {
              let text = self.quill.getText(range.index, range.length)
              self.selection = text
              self.$emit('select', range.index, range.index + range.length - 1, text)
            }
          } else {
          }
        })
        this.quill.on('onmouseup', function () {
          console.log('aaak')
        })
        this.quill.on('onmousedown', function () {
          console.log('bbbb')
        })
      },
      mouseup () {
        console.log('aaa')
      },
      mousedown (event) {
        event.preventDefault()
      },
      setEditorElement () {
        this.editor = document.querySelector(`#${this.id} .ql-editor`)
      },

      checkForInitialContent () {
        this.editor.innerHTML = this.value || ''
      }
    }
  }
</script>

<style>
  #quill-container {
    min-height: 400px;
    font-size: 28px;
  }
</style>
