<template>
  <z-page :title="'Scroll'">
    <z-scroll scrollY listenScroll :autoHeight="false" :probeType="1" @scroll="scroll($event, 'hello1')"
              style="width: 100%;margin-top: 20px;height: 20vh" :data="data">
      <div v-for="i in data" style="width: 100%;height:100px;color: black" :key="i">
        我是第{{i}}个数据哦
      </div>
    </z-scroll>

    <z-scroll ref="scrollx" scrollX listenScroll :probeType="2" @scroll="scroll($event, 'hello2')"
              style="height: 10vh;line-height:10vh;width:100%;margin-top: 20px;background-color: orange;"
              :width="10000">
      <div v-for="i in data"
           style="height:100px;color: black;float: left;padding-right: 20px;"
           :key="i">
        横着滚{{i}}
      </div>
    </z-scroll>

    <span @click="go3">去第三个</span><br>

    当开启y轴滚动。autoHeight默认为true，自动开启自适应高度。如果有header或者底部menu等。可以设置 :height=-10, -10就是你要减去当高度
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZScroll} from '../../index'
  export default {
    name: 'scroll',
    props: [],
    components: {ZPage, ZScroll},
    data () {
      return {
        data: []
      }
    },
    mounted () {
      for (let i = 0; i < 100; i++) {
        this.data.push(i)
      }
    },
    methods: {
      scroll (pos, hello) {
        console.log(hello, pos)
      },
      go3 () {
        this.$refs.scrollx.scrollTo(-76 * 3, 0, 1000)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
</style>
