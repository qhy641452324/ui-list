<template>
  <div>
    <loading></loading>
    <div style="height: 20vh;overflow: hidden">
      <slider auto-play :interval="1000">
        <div v-for="img in imgList">
          <a href="">
            <img class="needsclick" :src="img" style="height: 20vh">
          </a>
        </div>
      </slider>
    </div>
    <div style="height: 10vh;">
      星星
      <star :score="4.7" :startClick="true" @starChoose="starChoose"></star>
    </div>

    <scroll-load ref="hello" style="width: 100%;height: 25vh"
                 :data="result"
                 :pullDownRefresh="true"
                 :pullUpLoad="true"
                 @pullingUp="pullingUp"
                 @pullingDown="pullingDown">

      <div v-for="i in result" style="width: 100%;height:100px;background-color: red;color: white" :key="i">
        我是第{{i}}个数据哦
      </div>
    </scroll-load>

    <!-- scroll组件下面必须是一个单节点。请自行查看浏览器滚动条原理 -->
    <scroll ref="hello2" scrollY listenScroll :autoHeight="false" :probeType="1" @scroll="scroll($event, 'hello2')"
            style="width: 100%;margin-top: 20px;height: 20vh" :data="result2">
      <div v-for="i in result2" style="width: 100%;height:100px;color: black" :key="i">
        我是第{{i}}个数据哦
      </div>
    </scroll>

    <scroll ref="hello3" scrollX listenScroll :probeType="2" @scroll="scroll($event, 'hello3')"
            style="height: 10vh;line-height:10vh;width:100%;margin-top: 20px;background-color: orange;"
            :width="10000">
      <div v-for="i in result2"
           style="height:100px;color: black;float: left;padding-right: 20px;"
           :key="i">
        横着滚{{i}}
      </div>
    </scroll>

    <span @click="go3">去第三个</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import {ScrollLoad, Loading, Star, Scroll, Slider} from '../../index'
  import BScroll from 'better-scroll'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        result2: [],
        imgList: [
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/291429.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/290021.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/291735.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/291467.jpg'
        ]
      }
    },
    components: {ScrollLoad, Loading, Star, Scroll, Slider},
    mounted () {
      this.setResult2()
    },
    methods: {
      setResult2 () {
        for (let i = 0; i < 100; i++) {
          this.result2.push(i)
        }
      },
      pullingUp () {
        if (this.result.length > 20) {
          this.$refs.hello.forceUpdate() // 如果没数据了。调用这个方法就ok
          return
        }
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.result.push(this.result[this.result.length - 1] + 1)
          }
        }, 1000)
      },
      pullingDown () {
        setTimeout(() => {
          this.result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }, 1000)
      },
      scroll (pos, hello) {
        console.log(hello, pos)
      },
      starChoose (stars) {
        console.log(stars + '颗星星')
      },
      go3 () {
        this.$refs.hello3.scrollTo(-76 * 3, 0, 1000)
      }
    }
  }
</script>
