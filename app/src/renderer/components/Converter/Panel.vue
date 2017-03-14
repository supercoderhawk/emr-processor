<template>
  <div class="panel">
    <div class="row">
      <div class="col-sm-12 col-xs-12 col-lg-12">
        <v-select v-model="input.value" :options="input.options" options-value="val"
                  name="records" justified required close-on-select></v-select>
        <button @click="" class="btn btn-default">获取数据</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-xs-12 col-lg-12">
        <v-select v-model="output.value" :options="output.options" options-value="val"
                  name="types" justified close-on-select></v-select>
        <button @click="" class="btn btn-default">导出数据</button>
      </div>
    </div>

  </div>
</template>

<script>
  import {select} from 'vue-strap'
  import {CONVERTER} from '../../utils/constant'

  export default {
    components: {
      'v-select': select
    },
    data () {
      return {
        input: {
          options: CONVERTER.INPUT_TYPES,
          value: 0
        },
        output: {
          options: CONVERTER.OUTPUT_TYPES,
          value: 0
        }
      }
    }
  }
</script>

<style>
  .panel > .row {
    margin: 10px -15px;
  }
</style>
