<template>
  <z-page :title="'Toast'">
    <z-toast :time="2000" v-model="toast" :position="'top'">头顶</z-toast>
    <z-toast :time="0" v-model="toast">
      中间
      <z-loading></z-loading>
    </z-toast>
    <z-toast :time="2000" v-model="toast" :position="'bottom'">底部</z-toast>
    <button @click="toast=true">弹出消息</button>

    <z-toast :time="0" v-model="toastLoading">
      <z-loading></z-loading>
      <button @click="toastLoading=false">关闭loading</button>
    </z-toast>
    <button @click="toastLoading=true">弹出loading</button>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZToast, ZLoading} from '../../index'
  export default {
    name: 'toast',
    props: [],
    components: {ZPage, ZToast, ZLoading},
    data () {
      return {
        toast: false,
        toastLoading: false,
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
