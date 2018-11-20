<template>
  <div id="app">
    <transition :name="getRouterTransition">
      <router-view/>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    name: 'APP',
    data () {
      return {}
    },
    methods: {},
    computed: {
      getRouterTransition () {
        return this.$store.state.common.routeTransition
      }
    },
    watch: {
      '$store.state.common.routeTransition' (val) {
        if (val !== 'back') {
          return
        }
        let _this = this
        setTimeout(() => {
          _this.$store.state.common.routeTransition = 'forward'
        }, 300) //这里时间根据实际情况定义
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .forward-enter-active, .forward-leave-active
    transition: all .3s ease

  .back-enter-active, .back-leave-active
    transition: all .3s ease

  .forward-enter
    transform: translate3d(100%, 0, 0)

  .forward-leave-to
    transform: translate3d(-30%, 0, 0)

  .back-enter
    transform: translate3d(-30%, 0, 0)

  .back-leave-to
    transform: translate3d(100%, 0, 0)
</style>
