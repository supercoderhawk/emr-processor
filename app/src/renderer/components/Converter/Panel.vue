<template>
  <div class="panel">
    <div class="row">
      <div class="col-sm-12 col-xs-12 col-lg-12">
        <v-select v-model="input.value" :options="input.options" options-value="val"
                  name="records" justified required close-on-select></v-select>
        <button @click="getData" class="btn btn-default">获取数据</button>
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
  // import rp from 'request-promise-native'
  // import request from 'request'
  import {CONVERTER} from '../../utils/constant'
  // import crypto from 'crypto'
  // var request = require('request/request')
  // const https = require('https')
  import {syGet} from '../../utils/network'

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
    },
    methods: {
      getData () {
        syGet('/api/v1/db/129/note/14fe5761c6c540093e44bc4b').then(function (res) {
          console.log(res)
        })
      }
    }
  }
</script>

<style>
  .panel > .row {
    margin: 10px -15px;
  }
</style>
