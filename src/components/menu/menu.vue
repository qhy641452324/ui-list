<template>
  <div class="z-phone-menu" :style="{'height': height + 'px'}" :class="getLocationClass">
    <div class="nav-content border-right-1px" :class="{'nav-active': nav === d.key}" @click="select(d.key)" v-for="(d, index) in data"
         :key="index">
      <i :class="d.icon" style="padding-right: 5px"></i>
      <div>{{d.label}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'z-menu',
    props: {
      data: {
        type: Array,
        default: []
      },
      location: { // bottom or top
        type: String,
        default: 'bottom'
      },
      height: {
        type: Number,
        default: 47
      },
      defaultValue: {
        type: String,
        default: undefined
      }
    },
    components: {},
    computed: {
      getLocationClass () {
        return this.location
      }
    },
    data () {
      return {
        nav: undefined
      }
    },
    mounted () {
      if (!this.defaultValue) {
        this.nav = this.data[0].key
      } else {
        this.nav = this.defaultValue
      }
    },
    methods: {
      select (opt) {
        this.nav = opt
        this.$emit('change', opt)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .z-phone-menu
    displayFlex()
    position fixed
    background-color $default-bg
    width 100%
    border-top 1px solid $border-default-color
    &.bottom
      bottom 0
    &.top
      top 0
    .nav-content
      flex(1)
      displayFlex()
      justify-content center
      align-items center
      color $title-color
      &:last-child
        border-right 0
    .nav-active
      color $choose-color
</style>
