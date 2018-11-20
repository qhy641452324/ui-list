<template>
  <z-page :title="'Popup'">
    <button @click="popupTop=true">从上弹出</button>
    <z-popup v-model="popupTop" :from="'top'" heightAuto>
      <div @click="popupTop=false" style="padding:50px">关闭</div>
    </z-popup>

    <button @click="popupBottom=true">从下弹出</button>
    <z-popup v-model="popupBottom" :from="'bottom'">
      <div @click="popupBottom=false" style="padding:50px">关闭</div>
    </z-popup>

    <button @click="popupRight=true">从右弹出</button>
    <z-popup v-model="popupRight" widthAuto>
      <div @click="popupRight=false" style="padding:50px">关闭</div>
    </z-popup>

    <button @click="popupLeft=true">从左弹出</button>
    <z-popup v-model="popupLeft" :from="'left'">
      <div @click="popupLeft=false" style="padding:50px">关闭</div>
    </z-popup>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPopup, ZPage} from '../../index'
  export default {
    name: 'popup',
    props: [],
    components: {ZPopup, ZPage},
    data () {
      return {
        popupTop: false,
        popupBottom: false,
        popupRight: false,
        popupLeft: false,
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
