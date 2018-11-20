<template>
  <transition :name="transitionClass">
    <div class="z-page-wrapper" :style="{'z-index': zIndex}">
      <z-header :height="height" :noBack="noBack" @back="goBack" :title="title">
        <div slot="left">
          <slot name="left">
            {{backText}}
          </slot>
        </div>
        <div slot="right">
          <slot name="right">
          </slot>
        </div>
      </z-header>
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {pageZIndex} from '../../common/js/common'
  import ZHeader from './header.vue'
  export default {
    name: 'z-page',
    props: {
      height: {
        type: Number,
        default: 40
      },
      noBack: {
        type: Boolean,
        default: false
      },
      from: {
        type: String,
        default: 'right'
      },
      transition: String,
      title: {
        type: String,
        default: 'z-phone-ui'
      },
      zIndex: pageZIndex
    },
    components: {ZHeader},
    data () {
      return {
        backText: '< 返回'
      }
    },
    mounted () {
    },
    methods: {
      goBack () {
        this.$emit('back')
      }
    },
    computed: {
      transitionClass () {
        if (this.transition) {
          return this.transition
        }
        return 'page-from-' + this.from
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .z-page-wrapper
    position fixed
    background-color white
    top 0
    left 0
    bottom 0
    width 100%
    overflow hidden
    &.page-from-left-enter-active, &.page-from-left-leave-active
    &.page-from-right-enter-active, &.page-from-right-leave-active
      transition: all 0.3s ease
    &.page-from-left-enter, &.page-from-left-leave-to
      transform: translate3d(-100%, 0, 0)
    &.page-from-right-enter, &.page-from-right-leave-to
      transform: translate3d(100%, 0, 0)
</style>
