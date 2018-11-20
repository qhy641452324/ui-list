<template>
  <header class="z-page-header" :style="{'height':height + 'px', 'line-height':height + 'px'}">
    <div class="z-left-text" @click="goBack">
      <slot name="left">
        {{backText}}
      </slot>
    </div>
    <div class="z-content">
      {{title}}
    </div>
    <div class="z-right-text">
      <slot name="right">
      </slot>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'z-header',
    props: {
      height: {
        type: Number,
        default: 40
      },
      noBack: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'z-phone-ui'
      },
    },
    components: {},
    data () {
      return {
        backText: '< 返回'
      }
    },
    mounted () {
    },
    methods: {
      goBack () {
        if (this.noBack) {
          this.$emit('back')
        } else {
          this.$router.back()
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .z-page-header
    background-color $head-bg
    color $default-bg
    displayFlex()
    font-size $font-size-large
    position relative
    .z-left-text
    .z-right-text
      font-size $font-size-medium
      no-wrap()
    .z-left-text
      position absolute
      left 18px
      color: $default-bg
    .z-right-text
      position absolute
      right 18px
      color: $default-bg
    .z-content
      margin 0 auto
      no-wrap()
</style>
