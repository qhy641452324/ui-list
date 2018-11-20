<template>
  <z-page :title="'Slider'">
    <z-slider auto-play :interval="2000" ref="slider">
      <div v-for="img in imgList">
        <a href="" @click.prevent>
          <img :src="img" style="height: 20vh">
        </a>
      </div>
    </z-slider>

    <div class="des" style="font-size: 13px;margin-top: 20px">
      <div>loop:Boolean，默认true。开启则支持循环轮播，即划到最后一个，继续则从第一个开始。</div>
      <div>autoPlay:Boolean，默认true。开启自动轮播</div>
      <div>interval:Number，默认4000。毫秒，轮播时间间隔，需要autoPlay=true</div>
      <div>showDot:Boolean,默认true，显示小白点</div>
      <div>change:event,滑动过程中回调事件， 参数:{x:0, y:0},会回传x和y的位置信息</div>
      <div>goToPage:event,主动方法，参数page。需要设置ref，比如ref=slider,则调用方式:this.$refs.slider.goToPage(0),则去第一张图</div>
      <div>
        <button @click="go2">点我去第二张图</button>
      </div>
    </div>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZSlider} from '../../index'
  export default {
    name: 'slider',
    props: [],
    components: {ZPage, ZSlider},
    data () {
      return {
        imgList: [
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/291429.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/290021.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/291735.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/291467.jpg'
        ]
      }
    },
    mounted () {
    },
    methods: {
      go2 () {
        this.$refs.slider.goToPage(1)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
