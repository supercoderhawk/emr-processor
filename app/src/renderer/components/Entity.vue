<template>
  <div>
    <div class="text-wrapper">
      <bs-input type="textarea" @focus="event='focused'" @blur="event='blured'"></bs-input>
    </div>
    <list></list>
  </div>
</template>

<script>
  import {input} from 'vue-strap'
  import list from './Entity/List'

  export default{
    components: {
      'bs-input': input,
      'list': list
    },
    name: 'entity'
  }
</script>
