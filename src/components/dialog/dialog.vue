<template>
  <transition :name="transitionClass">
    <div class="z-dialog-wrapper" v-if="value">
      <div class="z-dialog-mask" @click="maskClose" :style="{'z-index':zIndex}"></div>
      <div class="dialog-main" :style="{'z-index':zIndex + 1}">
        <div class="dialog-container" :style="{'width' : width + 'px'}">
          <div class="close" @click="close" v-if="closeIcon"><i class="zu-close"></i></div>
          <div class="z-dialog-title-wrapper">
            <slot name="title">
              {{title}}
            </slot>
          </div>
          <div class="z-dialog-content-container">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer">
              <a @click.prevent="cancel" class="cancel border-top-1px border-right-1px" v-if="!cancelHide">{{cancelText}}</a>
              <a @click.prevent="ok" class="ok border-top-1px" v-if="!okHide">{{okText}}</a>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {popupZIndex} from '../../common/js/common'
  export default {
    name: 'z-dialog',
    props: {
      value: Boolean,
      title: String,
      transition: String,
      closeIcon: {
        type: Boolean,
        default: true
      },
      cancelHide: {
        type: Boolean,
        default: false
      },
      okHide: {
        type: Boolean,
        default: false
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      width: {
        type: Number,
        default: document.documentElement.clientWidth * 4 / 5
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      zIndex: popupZIndex
    },
    components: {},
    computed: {
      transitionClass () {
        if (this.transition) {
          return this.transition
        }
        return 'z-dialog'
      }
    },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      ok () {
        this.$emit('ok')
      },
      close () {
        this.$emit('input', false)
      },
      maskClose () {
        if (!this.maskClick) {
          return
        }
        this.$emit('input', false)
      },
      cancel () {
        this.$emit('cancel')
        this.$emit('input', false)
      },
    },
    watch: {
      value (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .z-dialog-wrapper
    .z-dialog-mask
      position fixed
      top: 0
      left: 0
      bottom: 0
      width: 100%
      pointer-events auto
      background-color $dialog-mask
      opacity .4
    .dialog-main
      position fixed
      top 50%
      left 50%
      transform translate(-50%, -50%)
      .dialog-container
        background-color $default-bg
        .close
          font-weight: 400;
          line-height: 32px;
          position: absolute;
          right: 4px;
          top 4px
          color: $des-color
          font-size: 21px;
          width: 32px;
          height: 32px;
          text-align: center;
        .z-dialog-title-wrapper
          text-align center
          color $select-text
          font-weight: 400;
          padding 30px 16px 0
        .z-dialog-content-container
          padding 16px
          word-break: break-all;
          word-wrap: break-word;
        .footer
          background-color $default-bg
          displayFlex()
          .cancel
          .ok
            flex(1)
            width 50%
            text-align center
            padding: 17px 10px
            box-sizing: border-box;
            background-color white
          .ok
            color $tab-choose-color

  .z-dialog-enter-active
    animation: dialog-fadein .4s
    .dialog-container
      animation: dialog-zoom .4s
    .z-dialog-mask-fadein
      animation: dialog-zoom .1s

  @keyframes z-dialog-mask-fadein
    0%
      opacity: 1
    100%
      opacity: 1

  @keyframes dialog-zoom
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)
</style>
