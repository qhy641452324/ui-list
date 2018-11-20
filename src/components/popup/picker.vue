<template>
  <popup v-model="show" :from="'bottom'" :maskClick="maskClick" :zIndex="zIndex">
    <slot name="title">
      <div class="z-picker-title-wrapper">
        <div class="cancel-text left" @click="close" v-if="!hideCancel">
          {{cancelText}}
        </div>
        <div class="title-text">{{title}}</div>
        <div class="cancel-text right ok-text" @click="ok" v-if="!hideOk">
          {{okText}}
        </div>
      </div>
    </slot>
    <slot></slot>
  </popup>
</template>

<script type="text/ecmascript-6">
  import Popup from '../popup/popup.vue'
  import {popupZIndex} from '../../common/js/common'
  export default {
    name: 'z-picker',
    props: {
      value: Boolean,
      title: String,
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      hideOk: {
        type: Boolean,
        default: false
      },
      hideCancel: {
        type: Boolean,
        default: false
      },
      zIndex: popupZIndex
    },
    components: {Popup},
    data () {
      return {
        show: false
      }
    },
    mounted () {
    },
    methods: {
      ok () {
        this.$emit('ok')
      },
      close () {
        this.show = false
        this.$emit('close')
        this.$emit('input', false)
      }
    },
    watch: {
      value (val) {
        this.show = val
      },
      show (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/variable.styl"
  .z-picker-title-wrapper
    position relative
    .cancel-text
      position absolute
      top 0
      padding: 19px 16px 17px 16px
      color $des-color
      font-size $font-size-medium-xx
      &.left
        left 0
      &.right
        right 0
    .ok-text
      color $choose-color
    .title-text
      padding: 17px 16px;
      margin: 0;
      text-align: center;
      overflow: hidden;
      no-wrap()
      font-size $font-size-large-xx
</style>
