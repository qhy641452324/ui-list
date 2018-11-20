<template>
  <div class="z-input-wrapper" :class="{'active':isFocus}">
    <input ref="input" class="z-input" v-model="data"
           @keyup.enter="_submit" @focus="_focus" @blur="_blur"
           :placeholder="placeholder">
    <div class="clear" v-if="data" @click="clear"><i class="zu-wrong"></i></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'z-input',
    props: {
      value: String,
      placeholder: {
        type: String,
        default: '请输入'
      }
    },
    components: {},
    data () {
      return {
        data: undefined,
        isFocus: false
      }
    },
    mounted () {
    },
    methods: {
      _submit () {
        this.$emit('submit')
        this.$refs.input.blur()
      },
      _focus (e) {
        this.isFocus = true
        this.$emit('focus', e)
      },
      _blur (e) {
        this.isFocus = false
        this.$emit('blur', e)
      },
      clear () {
        this.$emit('input', undefined)
        this.data = undefined
        this.$emit('clear')
        this.$refs.input.focus()
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
  .z-input-wrapper
    display flex
    border 1px solid $default-bg
    &.active
      border 1px solid $choose-color
    .z-input
      display: block;
      -webkit-box-flex: 1;
      flex: 1;
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      color: $title-color
      line-height: inherit;
      border-radius: 2px;
      outline: none;
      background-color: $default-bg
      border: 0;
      font-size: 14px;
    .clear
      background-color: $default-bg
      color $des-color
      font-size 14px
      line-height: 1
      padding: 8px
      box-sizing: content-box
      > i
        display: inline-block
        transform: scale(1.2)
</style>
