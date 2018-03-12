<template>
  <div>
    <el-tag color="#3df" class="tag-pointer">标签二</el-tag>
    <div>women<el-tag color="#3df" class="tag-pointer">标签二</el-tag>我们</div>
    <div v-html="htmlContent"></div>
  </div>
</template>

<script>
  import {Tag} from 'element-ui'
  // import Tag from 'iview/src/components/tag'
  // import 'iview/dist/styles/iview.css'
  import 'element-ui/lib/theme-default/index.css'

  export default {
    components: {
      'el-tag': Tag
    },
    data () {
      return {
        content: '这是一个电子病历啦啦啦啦啦',
        htmlContent: '<div>women<el-tag color="#3df" class="tag-pointer">标签二</el-tag>我们</div>'
      }
    },
    name: 'relation-panel'
  }
</script>

<style>
.tag-pointer{
  cursor: pointer;
}
</style>
