<template>
  <picker v-model="show" :title="title" hideOk :maskClick="maskClick" :hideCancel="hideCancel"
          :cancelText="cancelText" :zIndex="zIndex">

    <div slot="title" v-if="hideTitle">
      <slot name="title"></slot>
    </div>

    <div class="content-wrapper">
      <touch v-for="(d, index) in data" class="item border-top-1px" :key="index"
             :class="{'active': active===d.value || active===d.label}"
             @click="change(d)">
        {{d.label}}
      </touch>
      <div class="line-mask" v-if="bottomCancel"></div>
      <touch class="item border-top-1px cancel-text" v-if="bottomCancel && !hideTitle" @click="close">
        {{cancelText}}
      </touch>
    </div>
  </picker>
</template>

<script type="text/ecmascript-6">
  import Touch from '../touch/touch.vue'
  import Picker from '../popup/picker.vue'
  import {popupZIndex} from '../../common/js/common'
  export default {
    name: 'z-action-sheet',
    props: {
      value: Boolean,
      title: String,
      active: null, //任何类型
      cancelText: {
        type: String,
        default: '取消'
      },
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      bottomCancel: {
        type: Boolean,
        default: false
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      hideTitle: {
        type: Boolean,
        default: false
      },
      zIndex: popupZIndex
    },
    components: {Touch, Picker},
    data () {
      return {
        show: false,
        hideCancel: true
      }
    },
    mounted () {
    },
    methods: {
      close () {
        this.show = false
        this.$emit('close')
      },
      change (val) {
        this.$emit('change', val)
        this.close()
      }
    },
    watch: {
      value (val) {
        this.show = val
        if (val) {
          this.hideCancel = this.bottomCancel
        }
      },
      show (val) {
        this.$emit('input', val)
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .content-wrapper
    .line-mask
      height: 6px;
      background-color: $mask-default
    .item
      padding: 17px 16px;
      font-size $font-size-large-x
      color $title-color
      margin: 0;
      text-align: center;
      overflow: hidden;
      textSelect()
      no-wrap()
      &.cancel-text
        color $des-color
      &.active
        color $choose-color
</style>
