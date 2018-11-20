<template>
  <z-page :title="'Touch'">
    <div class="des" style="font-size: 13px;padding-top: 20px">
      <div>time:Number，默认1000，毫秒。手指按下去不松的持续时间</div>
      <div>className:String，默认:背景变为#f5f5f5。手指点击之后触发的样式</div>
      <div>holdOpen:Boolean，默认false,开启之后，当手指按住不松回调时候不会触发click事件</div>
      <div>touchingClassCancel:Boolean,默认false,开启取消手指点击样式,通常和滑动一起使用。比如右滑返回上一页，不需要把整个页面背景颜色更改</div>
      <div>sliderLeftOpen:Boolean,默认false,开启向左滑动</div>
      <div>moveLeft:Number,默认应用可视宽度三分之一，向左滑动阀值</div>
      <div>touchMoveLeft:event,向左滑动的回调事件</div>
      <div>sliderRightOpen:Boolean,默认false,开启向右滑动</div>
      <div>moveRight:Number,默认应用可视宽度三分之一，向右滑动阀值</div>
      <div>touchMoveRight:event,向右滑动的回调事件</div>
    </div>
    <z-touch style="height: 50px;padding-top: 20px">点我会变颜色</z-touch>
    <z-touch style="height: 50px;padding-top: 20px" :time="1000" holdOpen @holding="holding" @click="holdingClick">点我保持1秒</z-touch>
    <z-touch style="height: 50px;padding-top: 20px" touchingClassCancel sliderLeftOpen @touchMoveLeft="touchMoveLeft">
      开启左滑。向左滑动界面大约三分之一距离试试看
    </z-touch>
    <z-touch style="height: 50px;padding-top: 20px" touchingClassCancel sliderRightOpen
             @touchMoveRight="touchMoveRight">
      开启右滑。向右滑动界面大约三分之一距离试试看
    </z-touch>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZTouch} from '../../index'
  export default {
    name: 'touch',
    props: [],
    components: {ZPage, ZTouch},
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      holding () {
        alert('恭喜你保持1s')
      },
      touchMoveLeft (touch) {
        alert('向左滑动， startX：' + touch.startClientX + ', startY:' + touch.startClientY + ', endX:' + touch.endClientX + ', endY:' + touch.endClientY)
      },
      touchMoveRight (touch) {
        alert('向左滑动， startX：' + touch.startClientX + ', startY:' + touch.startClientY + ', endX:' + touch.endClientX + ', endY:' + touch.endClientY)
      },
      holdingClick () {
          alert(123123)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
