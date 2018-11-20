<template>
  <div class="z-toast-wrapper">
    <div class="zui-mask" v-show="!hideMask && show" :style="{'z-index':zIndex}"></div>
    <transition :name="currentTransition">
      <div class="zui-toast" v-show="show" :class="positionClass" ref="toast" :style="{'z-index':zIndex+1}">
        <slot>操作成功</slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {popupZIndex} from '../../common/js/common'
  export default {
    name: 'z-toast',
    props: {
      value: Boolean,
      time: {
        type: Number,
        default: 1000
      },
      hideMask: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'center'
      },
      zIndex: popupZIndex
    },
    components: {},
    data () {
      return {
        show: false
      }
    },
    mounted () {
      if (this.value) {
        this.show = true
      }
    },
    methods: {},
    computed: {
      currentTransition () {
        return 'toast-from-' + this.position
      },
      positionClass () {
        return 'position-' + this.position
      }
    },
    watch: {
      show (val) {
        if (val) {
          clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            this.show = false
            this.$emit('input', false)
          }, this.time <= 0 ? 99999999 : this.time)
        }
      },
      value (val) {
        this.show = val
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .z-toast-wrapper
    .zui-mask
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      widows 100%
    .zui-toast
      position: fixed;
      padding 15px
      background: rgba(17, 17, 17, 0.7);
      text-align: center;
      border-radius: 5px;
      color: $default-bg
      &.position-top
        top: 0
        left 0
        right 0
      &.position-center
        top: 50%
        left 50%
        transform: translateX(-50%) translateY(50%)
      &.position-bottom
        bottom: 0
        left 0
        right 0
      &.toast-from-top-enter-active
      &.toast-from-top-leave-active
      &.toast-from-bottom-enter-active
      &.toast-from-bottom-leave-active
        transition: all 0.3s ease
      &.toast-from-center-enter-active, &.toast-from-center-leave-active
        transition: opacity 0.3s;
      &.toast-from-center-enter, &.toast-from-center-leave-to
        opacity: 0
      &.toast-from-top-enter, &.toast-from-top-leave-to
        transform: translateY(-100%)
        opacity: 0;
      &.toast-from-bottom-enter, &.toast-from-bottom-leave-to
        opacity: 0
        transform: translateY(100%)
</style>
