<template>
<div class="converter">
  <div class="col-sm-6 col-xs-6 col-lg-6">
    <panel class="item"></panel>

    <div class="item">
      <div class="row">
        <div class="panel col-sm-12 col-xs-12 col-lg-12 content-wrapper">
          <bs-input ref="textarea" type="textarea" v-model="plainText" readonly></bs-input>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-lg-12 json-wrapper">
          <div id="json-container">
          </div>
          <div class="json-mode" v-json-content="json"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {input} from 'vue-strap'
  import panel from './Converter/Panel.vue'
  import jsonFormatter from '../utils/formatter'

  import Vue from 'vue'
  Vue.use(jsonFormatter)

  export default {
    components: {
      'bs-input': input,
      'panel': panel
    },
    data () {
      return {
        text: 'aa'
      }
    },
    methods: {
    },
    computed: {
      plainText () {
        return this.$store.state.converter.plainText
      },
      jsonText () {
        return this.$store.state.converter.jsonText
      },
      json () {
        return JSON.parse(this.$store.state.converter.jsonText)
      }
    }
  }
</script>

<style>
  .converter > div > .item{
    margin: 10px 20px;
  }
  .panel textarea {
    height: 400px;
  }
</style>
