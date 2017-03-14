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
  import crypto from 'crypto'
  // var request = require('request/request')
  const https = require('https')

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
        let time = Math.floor(Date.now() / 1000)
        let url = CONVERTER.TEST_URL + '?ts=' + time
        let path = '/api/v1/db/129/note/14fe5761c6c540093e44bc4b?ts=' + time
        let sign = crypto.createHash('sha256').update(encodeURI(path) + CONVERTER.SIGN, 'utf8').digest('hex')
        console.log(encodeURI(url))
        let options = {
          host: CONVERTER.HOST,
          path: path,
          port: '443',
          headers: {
            'x-sign': sign,
            'x-key': CONVERTER.KEY
          }
        }
        https.get(options, function (res, body) {
          // console.log(res)
          // console.log(err)
          res.on('data', (d) => {
            // process.stdout.write(d);
            console.log(d.toString())
            console.log(res.statusCode)
          })
        })
        /*
        rp({uri: CONVERTER.TEST_URL + '?ts=' + time, json: true})
            .then(function (res) {
              console.log(JSON.toString(res))
            })
            */
      }
    }
  }
</script>

<style>
  .panel > .row {
    margin: 10px -15px;
  }
</style>
