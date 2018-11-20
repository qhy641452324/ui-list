<template>
  <div :class="getActiveClass"
       @touchstart="touchStart"
       @touchmove="touchMove"
       @touchend="touchEnd">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'z-touch',
    props: {
      time: {
        type: Number,
        default: 1000
      },
      className: {
        type: String,
        default: undefined
      },
      touchingClassCancel: {
        type: Boolean,
        default: false
      },
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
    computed: {
      getActiveClass () {
        if (this.touchingClassCancel) {
          return undefined
        }
        if (this.className) {
          return this.touching ? this.className : undefined
        }
        return this.touching ? 'z-touch-active' : undefined
      }
    },
    data () {
      return {
        touching: false,
        touch: {
          startClientX: 0,
          startClientY: 0,
          endClientX: 0,
          endClientY: 0,
          clickCancel: false
        }
      }
    },
    mounted () {
    },
    methods: {
      touchStart (e) {
        this.setTouchValue(true, e)
        this.touching = true
        clearTimeout(this.timeout)
        let _this = this
        this.timeout = setTimeout(() => {
          _this.clickCancel = true
          this.$emit('holding')
        }, this.time)
      },
      touchMove (e) {
      },
      touchEnd (e) {
        // holding event over
        this.setTouchValue(false, e)
        this.touching = false
        clearTimeout(this.timeout)

        //emit click event
        let slidingX = this.touch.endClientX - this.touch.startClientX
        let slidingY = this.touch.endClientY - this.touch.startClientY
        if (slidingX === 0 && slidingY === 0 && !this.clickCancel) {//说明是点击事件
          this.$emit('click')
        }

        //moving touch
        this.getSliding()
        this.clickCancel = false
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

<style lang="stylus" type="text/stylus" scoped>
  .z-touch-active
    background-color $border-default-color !important
</style>
