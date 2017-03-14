<template>
<div class="converter">
  <div class="col-sm-6 col-xs-6 col-lg-6">
    <panel class="item"></panel>

    <div class="item">
      <div class="row">
        <div class="panel col-sm-12 col-xs-12 col-lg-12 content-wrapper">
          <bs-input ref="textarea" type="textarea" v-model="text" readonly></bs-input>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-lg-12 json-wrapper">
          <div id="json-container">
          </div>
          <div class="json-mode">

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  // import JSONFormatter from 'json-formatter-js'
  import {input} from 'vue-strap'
  import panel from './Converter/Panel'

  export default {
    components: {
      'bs-input': input,
      'panel': panel
    },
    data () {
      return {
        text: 'aa'
      }
    }
  }

</script>

<style>
  .converter > div > .item{
    margin: 10px 20px;
  }

</style>
