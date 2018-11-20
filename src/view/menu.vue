<template>
  <z-page :title="'Menu'">
    <z-menu @change="change" :data="data" :location="'top'"></z-menu>
    <z-menu @change="change" :data="data"></z-menu>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZMenu} from '../../index'
  export default {
    name: 'zmenu',
    props: [],
    components: {ZPage, ZMenu},
    data () {
      return {
        data: [
          {key: 'back', label: '返回上一页', icon: 'zu-back'},
          {key: 'home', label: '首页', icon: 'zu-home'},
          {key: 'user', label: '我的', icon: 'zu-person'},
        ]
      }
    },
    mounted () {
    },
    methods: {
      change (val) {
        console.log(val)
        if (val === 'back') {
          this.$router.back()
        }
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
