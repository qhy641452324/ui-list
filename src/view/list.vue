<template>
  <div class="z-phone-ui-home-wrapper">
    <z-header>
      <div slot="left"></div>
    </z-header>
    <z-scroll scrollY :height="-40" class="border-top-1px" style="overflow: auto;">
      <z-touch v-for="(m, index) in menu" :key="index" class="item border-bottom-1px">
        <a href="" @click.prevent="go(m.to)">
          {{index+1}}. {{m.name}}
          <span class="icon"> > </span>
        </a>
      </z-touch>
    </z-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZScroll, ZTouch, ZHeader} from '../../index'
  export default {
    name: '',
    props: [],
    components: {ZPage, ZScroll, ZTouch, ZHeader},
    data () {
      return {
        menu: [
          {name: 'Loading(更多样式采集中)', to: 'loading'},
          {name: 'Tab && TabScroll', to: 'tab'},
          {name: 'Input && Search', to: 'input'},
          {name: 'Popup', to: 'popup'},
          {name: 'Toast', to: 'toast'},
          {name: 'Star', to: 'star'},
          {name: 'Icon', to: 'icon'},
          {name: 'Page', to: 'page'},
          {name: 'Scroll', to: 'scroll'},
          {name: 'Scroll Load', to: 'scrollLoad'},
          {name: 'Slider', to: 'slider'},
          {name: 'Touch', to: 'touch'},
          {name: 'Menu', to: 'menu'},
          {name: 'Dialog', to: 'dialog'},
          {name: 'ActionSheet', to: 'action-sheet'},
          {name: 'Select', to: 'select'},
        ]
      }
    },
    mounted () {
    },
    methods: {
      go (routerName) {
        this.$router.push({
          name: routerName
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../common/stylus/variable.styl"
  .z-phone-ui-home-wrapper
    .item
      height: 60px;
      line-height: 60px;
      padding-left: 16px;
      a
        display: block;
        position: relative;
        width: 100%
        color: #333
        text-decoration: none;
        outline: 0
        .icon
          position absolute
          right 20px
          color #ccc
</style>
