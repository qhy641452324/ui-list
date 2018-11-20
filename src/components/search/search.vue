<template>
  <div class="z-search-wrapper">
    <div class="z-input-wrapper" :class="{'active':isFocus}">
      <input ref="input" class="z-input" v-model="data"
             @keyup.enter="_submit" @focus="_focus" @blur="_blur"
             :placeholder="placeholder">
      <div class="clear" v-if="data" @click="_clear"><i class="zu-wrong"></i></div>
    </div>
    <img src="./icon-search02.png" class="search-icon" v-if="!showCancel && !data">
    <div class="cancel" v-if="showCancel" @click="_cancel">取消</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'z-search',
    props: {
      value: String,
      placeholder: {
        type: String,
        default: '请输入关键词'
      }
    },
    components: {},
    data () {
      return {
        data: undefined,
        showCancel: false,
        isFocus: false
      }
    },
    mounted () {
    },
    methods: {
      _focus (e) {
        this.isFocus = true
        this.showCancel = true
        this.$emit('focus', e)
      },
      _blur (e) {
        this.isFocus = false
        this.showCancel = false
        this.$emit('blur', e)
      },
      _clear () {
        this.data = undefined
        this.$refs.input.focus()
        this.$emit('clear')
      },
      _submit () {
        this.$refs.input.blur()
        this.$emit('submit')
      },
      _cancel () {
        this._blur()
        this.$emit('input', undefined)
        this.data = undefined
        this.showCancel = false
        this.$emit('cancel')
      },
      setFocus () {
        this.$refs.input.focus()
      },
      setBlur () {
        this.$refs.input.blur()
      }
    },
    watch: {
      data (val) {
        this.$emit('input', val)
      },
      value (val) {
        this.data = val
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .z-search-wrapper
    padding: 8px;
    display: flex;
    box-sizing: border-box;
    background-color: $border-default-color
    position relative
    .search-icon
      position absolute
      width 16px
      height 16px
      right 16px
      top 16px
    .z-input-wrapper
      flex auto
      display flex
      border 1px solid $default-bg
      &.active
        border 1px solid $choose-color
      .z-input
        display: block;
        -webkit-box-flex: 1;
        flex: 1;
        width: 100%;
        box-sizing: border-box;
        line-height: inherit;
        border-radius: 2px;
        outline: none;
        background-color: $default-bg
        border: 0;
        padding 8px
        &::-webkit-input-placeholder
          font-size $font-size-medium
          color $des-color
        &::-moz-placeholder
          font-size $font-size-medium
          color $des-color
        &::-moz-placeholder
          font-size $font-size-medium
          color $des-color
        &::-ms-input-placeholder
          font-size $font-size-medium
          color $des-color
        font-size $font-size-medium
        color $title-color
        &:focus
          outline-offset 0
      .clear
        background-color: $default-bg
        color $des-color
        font-size $font-size-medium-xx
        line-height: 1
        padding: 8px
        box-sizing: content-box
        > i
          display: inline-block
          transform: scale(1.2)
    .cancel
      margin-left: 10px;
      padding-top 8px
      line-height 1
      color: $choose-color
      font-size $font-size-medium-xx
      white-space: nowrap;
</style>
