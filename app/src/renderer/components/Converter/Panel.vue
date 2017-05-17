<template>
    <div class="panel">
        <div class="row">
            <div class="col-sm-12 col-xs-12 col-lg-12">
                <v-select v-model="input.value" :options="input.options" options-value="val"
                          name="records" @change="recordChange" @selected="recordSelected" justified required
                          close-on-select></v-select>
                <a @click="getData" class="btn btn-default">获取数据</a>
                <a class="btn btn-default">测试</a>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-xs-12 col-lg-12">
                <v-select v-model="output.value" :options="output.options" options-value="val"
                          name="types" justified close-on-select></v-select>
                <a @click="" class="btn btn-default">导出数据</a>
            </div>
        </div>

    </div>
</template>

<script>
  import {select} from 'vue-strap'
  import {CONVERTER} from '../../utils/constant'
  import {syGet} from '../../utils/network'

  export default {
    components: {
      'v-select': select
    },
    data () {
      return {
        output: {
          options: CONVERTER.OUTPUT_TYPES,
          value: 0
        }
      }
    },
    computed: {
      input () {
        let options = this.$store.state.converter.records.map((item) => {
          return {val: item.id, label: item.name}
        })

        return {value: 0, options}
      }
    },
    methods: {
      recordChange (value) {
        console.log('change:' + value)
        // 根据选中的病历ID设置内容
        // let plain = this.$store.state.converter.records[value].plainText
        // let json = this.$store.state.converter.records[value].jsonText
        // this.$store.dispatch('modifyText', {plainText: plain, jsonText: json})
      },
      recordSelected (label) {
        console.log('selected' + label)
      },
      // 获取森亿智库病历列表
      getData () {
        // 清除原有数据
        this.$store.dispatch('removeAllRecords')
        // 获取数据
        let $this = this
        syGet(CONVERTER.BASE_PATH, {start: 0, count: 27})
          .then(function (res) {
            $this.getDetailData(res.data[0])
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      // 获取森亿智库每份病历详细信息
      getDetailData (item) {
        let $this = this
        syGet(CONVERTER.BASE_PATH + item.id)
          .then(function (resItem) {
            syGet(CONVERTER.BASE_PATH + resItem.id + '/concept', undefined, false)
              .then(function (resConcept) {
                $this.$store.dispatch('addRecord',
                  {id: resItem.id, name: resItem.name, plainText: resItem.content, jsonText: resConcept})
                  .then(function () {
                    $this.recordChange(0)
                  })
              })
              .catch(function (err) {
                console.log(err)
              })
          })
          .catch(function (error) {
            console.log(error)
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
