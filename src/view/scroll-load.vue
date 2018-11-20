<template>
  <z-page :title="'Scroll Load'">
    <div style="height: 150px;font-size: 13px;">
      <div style="padding-top: 5px;padding-bottom: 5px;">pullDownRefresh:开启下拉刷新，pullingDown：下拉回调函数</div>
      <div style="padding-top: 5px;padding-bottom: 5px;">pullUpLoad:开启上拉刷新，pullingUp：上拉回调函数</div>
      <div style="padding-top: 5px;padding-bottom: 5px;">autoHeight:true(默认)自适应高度。高度为应用可视高度。如果有header或者底部menu，则需要设置height属性减去这些高度，比如 :height="-40"</div>
      <div style="padding-top: 5px;padding-bottom: 5px;">data:把数据给data。当data发生变化，会重新渲染组件</div>
      <div style="padding-top: 5px;padding-bottom: 5px;">无数据时，调用forceUpdate()重新渲染。给组件加上ref，调用方式: this.$refs.load.forceUpdate(),load就是你ref=load</div>
    </div>
    <z-scroll-load ref="load"
                   :data="data"
                   :height="-190"
                   pullDownRefresh
                   pullUpLoad
                   @pullingUp="pullingUp"
                   @pullingDown="pullingDown">

      <div v-for="i in data" style="width: 100%;height:100px;line-height:100px;background-color: white" :key="i">
        我是第{{i}}个
      </div>
    </z-scroll-load>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZScrollLoad} from '../../index'
  export default {
    name: 'scroll-load',
    props: [],
    components: {ZPage, ZScrollLoad},
    data () {
      return {
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    mounted () {
    },
    methods: {
      pullingUp () {
        if (this.data.length > 20) {
          this.$refs.load.forceUpdate() // 如果没数据了。调用这个方法就ok
          return
        }
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.data.push(this.data[this.data.length - 1] + 1)
          }
        }, 1000)
      },
      pullingDown () {
        setTimeout(() => {
          this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }, 1000)
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
</style>
