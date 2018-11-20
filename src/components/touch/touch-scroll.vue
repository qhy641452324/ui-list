<!-- 组件已废除，所有功能已移植到touch组件上 -->
<template>
  <div
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'touch-scroll',
    props: {
      moveLeft: { //向左滑动的距离阀值(px)
        type: Number,
        default: document.documentElement.clientWidth / 3
      },
      moveRight: {//向右滑动的距离阀值(px)
        type: Number,
        default: document.documentElement.clientWidth / 3
      },
      sliderLeftOpen: { //开启左滑
        type: Boolean,
        default: false
      },
      sliderRightOpen: { //开启右滑
        type: Boolean,
        default: false
      }
    },
    components: {},
    data () {
      return {
        touch: {
          startClientX: 0,
          startClientY: 0,
          endClientX: 0,
          endClientY: 0
        }
      }
    },
    mounted () {
    },
    methods: {
      touchStart (e) {
        this.setTouchValue(true, e)
        // this.$emit('touchStart', this.touch)
      },
      touchMove (e) {
      },
      touchEnd (e) {
        this.setTouchValue(false, e)
        // this.$emit('touchEnd', this.touch)
        this.getSliding()
      },
      setTouchValue (isStart, e) {
        if (isStart) {
          this.touch.startClientX = e.changedTouches[0].clientX
          this.touch.startClientY = e.changedTouches[0].clientY
        } else {
          this.touch.endClientX = e.changedTouches[0].clientX
          this.touch.endClientY = e.changedTouches[0].clientY
        }
      },
      getSliding () { //计算滑动，回调
        let sliding = this.touch.endClientX - this.touch.startClientX
        if (sliding > 0) { //向右滑动
          this.initSlideRight(sliding)
        } else { // 向左滑动
          this.initSlideLeft(-sliding)
        }
      },
      initSlideLeft (sliding) {
        if (!this.sliderLeftOpen) {
          return
        }
        if (sliding >= this.moveLeft) {
          this.$emit('touchMoveLeft', this.touch)
        }
      },
      initSlideRight (sliding) {
        if (!this.sliderRightOpen) {
          return
        }
        if (sliding >= this.moveRight) {
          this.$emit('touchMoveRight', this.touch)
        }
      }
    }
  }
</script>
