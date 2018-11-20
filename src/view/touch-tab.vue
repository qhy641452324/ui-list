<template>
  <z-page :title="'Tab && TabScroll'">
    <div class="tab-demo">
      <z-tab :data="data" slider :defaultIndex="1" @change="change"/>
    </div>

    <div class="tab-scroll-demo" style="margin-top: 40px;">
      <z-tab-scroll :data="data">
        <div slot="content" v-for="i in 4" style="height: 200px;margin-top:10px;background-color: #fc9153">asdasdasd--{{i}}</div>
      </z-tab-scroll>
    </div>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZTab, ZTabScroll, ZPage} from '../../index'
  export default {
    name: '',
    props: [],
    components: {ZTab, ZTabScroll, ZPage},
    data () {
      return {
        data: [
          {label: '标题1'},
          {label: '标题2', icon: 'zu-warn'},
          {label: '标题3', icon: 'zu-question'},
          {label: '标题4'},
        ]
      }
    },
    mounted () {
    },
    methods: {
      change (selection) {
        console.log(selection)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
</style>
