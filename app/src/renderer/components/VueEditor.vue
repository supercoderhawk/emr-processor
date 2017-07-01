<template>
    <div class="quillWrapper">
        <div ref="quillContainer" :id="id"></div>
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
        editor: null
      }
    },

    mounted () {
      this.initializeVue2Editor()
      this.handleUpdatedEditor()
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
        this.quill = new Quill(this.$refs.quillContainer, {
          modules: {
            toolbar: false
          },
          placeholder: this.placeholder ? this.placeholder : '',
          theme: 'snow',
          readOnly: this.disabled ? this.disabled : false
        })
        this.quill.on('text-change', (delta, oldDelta, source) => {
          let text = this.quill.getText()
          console.log(text)
        })
      },

      setEditorElement () {
        this.editor = document.querySelector(`#${this.id} .ql-editor`)
      },

      checkForInitialContent () {
        this.editor.innerHTML = this.value || ''
      },

      handleUpdatedEditor () {
        this.quill.on('text-change', () => {
          this.$emit('input', this.editor.innerHTML)
        })
      }
    }
  }
</script>

<style>
    #quill-container {
        min-height: 400px;
    }
</style>
