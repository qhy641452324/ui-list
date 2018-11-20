<template>
  <z-page :title="'Loading'">
    <z-loading></z-loading>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZLoading} from '../../index'
  export default {
    name: 'loading',
    props: [],
    components: {ZPage, ZLoading},
    data () {
      return {}
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
