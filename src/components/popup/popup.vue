<template>
  <div class="z-popup-wrapper">
    <div class="z-popup-mask" v-if="!maskHide && maskShow" @click="maskClose" :style="{'z-index':zIndex}"></div>
    <transition :name="getTransition">
      <div class="z-popup-content-wrapper" :class="from" v-if="value" ref="popup" :style="{'z-index':zIndex + 1}">
        <slot>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {popupZIndex} from '../../common/js/common'
  export default {
    name: 'z-popup',
    props: {
      value: Boolean,
      from: { // top right bottom left
        type: String,
        default: 'right'
      },
      maskHide: {
        type: Boolean,
        default: false
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      transition: String,
      widthAuto: {
        type: Boolean,
        default: false
      },
      heightAuto: {
        type: Boolean,
        default: false
      },
      zIndex: popupZIndex
    },
    components: {},
    data () {
      return {
        maskShow: false
      }
    },
    mounted () {
    },
    methods: {
      close () {
        this.$emit('input', false)
        setTimeout(() => {
          this.maskShow = false
        }, 300)
      },
      maskClose () {
        if (!this.maskClick) {
          return
        }
        this.$emit('input', false)
        setTimeout(() => {
          this.maskShow = false
        }, 300)
      },
      resetContentWrapper () {
        if (this.widthAuto) {
          this.$refs.popup.style.width = '100%'
        }
        if (this.heightAuto) {
          this.$refs.popup.style.top = 0
          this.$refs.popup.style.bottom = 0
        }
      }
    },
    computed: {
      getTransition () {
        return this.transition ? this.transition : 'z-popup-' + this.from
      }
    },
    watch: {
      value (val) {
        this.$emit('init', val)
        if (val) {
          this.$emit('input', true)
          this.maskShow = true
          this.$nextTick(() => {
            this.resetContentWrapper()
          })
        } else {
          this.close()
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .z-popup-wrapper
    display inline-block
    .z-popup-mask
      position fixed
      top 0
      bottom 0
      left 0
      width 100%
      background-color: $dialog-mask
      opacity: .4
    .z-popup-content-wrapper
      position fixed
      background-color $default-bg
      &.top
        left 0
        right 0
        top 0
      &.right
        right 0
        top 0
        bottom 0
      &.bottom
        left 0
        bottom 0
        right 0
      &.left
        left 0
        top 0
        bottom 0
      &.z-popup-top-enter-active, &.z-popup-top-leave-active
      &.z-popup-right-enter-active, &.z-popup-right-leave-active
      &.z-popup-bottom-enter-active, &.z-popup-bottom-leave-active
      &.z-popup-left-enter-active, &.z-popup-left-leave-active
        transition: all 0.3s ease

      &.z-popup-top-enter, &.z-popup-top-leave-to
        transform: translate3d(0, -100%, 0)
      &.z-popup-right-enter, &.z-popup-right-leave-to
        transform: translate3d(100%, 0, 0)
      &.z-popup-bottom-enter, &.z-popup-bottom-leave-to
        transform: translate3d(0, 100%, 0)
      &.z-popup-left-enter, &.z-popup-left-leave-to
        transform: translate3d(-100%, 0, 0)
</style>
