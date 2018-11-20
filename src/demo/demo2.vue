<template>
  <div>
    <zcon class="zu-eye-invisible"></zcon>
    <zcon class="zu-eye-visible"></zcon>
    <zcon class="zu-square-right"></zcon>
    <zcon class="zu-select"></zcon>
    <zcon class="zu-pulldown"></zcon>
    <zcon class="zu-pullup"></zcon>
    <zcon class="zu-more"></zcon>
    <zcon class="zu-back"></zcon>
    <zcon class="zu-arrow"></zcon>
    <zcon class="zu-close"></zcon>
    <zcon class="zu-warn"></zcon>
    <zcon class="zu-question"></zcon>
    <zcon class="zu-right"></zcon>
    <zcon class="zu-wrong"></zcon>
    <zcon class="zu-info"></zcon>
    <zcon class="zu-info"></zcon>
    <zcon class="zu-remove"></zcon>
    <zcon class="zu-add"></zcon>
    <zcon class="zu-share"></zcon>
    <zcon class="zu-no-wifi"></zcon>
    <zcon class="zu-smile"></zcon>
    <zcon class="zu-sad"></zcon>
    <zcon class="zu-email"></zcon>
    <zcon class="zu-game"></zcon>
    <zcon class="zu-wifi"></zcon>
    <zcon class="zu-hot"></zcon>
    <zcon class="zu-notification"></zcon>
    <zcon class="zu-delete"></zcon>
    <zcon class="zu-vip"></zcon>
    <zcon class="zu-mute"></zcon>
    <zcon class="zu-danger"></zcon>
    <zcon class="zu-volume"></zcon>
    <zcon class="zu-bad"></zcon>
    <zcon class="zu-mobile-phone"></zcon>
    <zcon class="zu-aim"></zcon>
    <zcon class="zu-navigation"></zcon>
    <zcon class="zu-safe-pay"></zcon>
    <zcon class="zu-tag"></zcon>
    <zcon class="zu-lock"></zcon>
    <zcon class="zu-unlock"></zcon>
    <zcon class="zu-edit"></zcon>
    <zcon class="zu-scan"></zcon>
    <zcon class="zu-qr-code"></zcon>
    <zcon class="zu-calendar"></zcon>
    <zcon class="zu-time"></zcon>
    <zcon class="zu-star"></zcon>
    <zcon class="zu-setting"></zcon>
    <zcon class="zu-home"></zcon>
    <zcon class="zu-credit-card"></zcon>
    <zcon class="zu-mall"></zcon>
    <zcon class="zu-microphone"></zcon>
    <zcon class="zu-search"></zcon>
    <zcon class="zu-good"></zcon>
    <zcon class="zu-alert"></zcon>
    <zcon class="zu-picture"></zcon>
    <zcon class="zu-message"></zcon>
    <zcon class="zu-phone"></zcon>
    <zcon class="zu-location"></zcon>
    <zcon class="zu-like"></zcon>
    <zcon class="zu-camera"></zcon>
    <zcon class="zu-person"></zcon>
    <zcon class="zu-round-border"></zcon>
    <zcon class="zu-important"></zcon>
    <zcon class="zu-ok"></zcon>
    <zcon class="zu-square-border"></zcon>
    <br>

    <toast :time="2000" v-model="toast" :position="'top'">头顶</toast>
    <toast :time="0" v-model="toast">
      中间
      <loading></loading>
    </toast>
    <toast :time="2000" v-model="toast" :position="'bottom'">底部</toast>
    <button @click="toast=true">弹出消息</button>

    <toast :time="0" v-model="toastLoading">
      <loading></loading>
      <button @click="toastLoading=false">关闭loading</button>
    </toast>
    <button @click="toastLoading=true">弹出loading</button>
    <br>

    <p>下面popup弹出层组件属性共有:1.top 2.top-left 3.top-right 4.left(default) 5.right 6.bottom 7.bottom-left 8.bottom-right</p>
    <button @click="popupTop=true">从上弹出</button>
    <popup v-model="popupTop" :position="'top'" style="background-color: red"><span @click="popupTop=false">关闭</span>
    </popup>

    <button @click="popupTopLeft=true">从左上角弹出</button>
    <popup v-model="popupTopLeft" :position="'top-left'" style="background-color: red"><span
      @click="popupTopLeft=false">关闭</span></popup>

    <button @click="popupTopRight=true">从右上角弹出</button>
    <popup v-model="popupTopRight" :position="'top-right'" style="background-color: red"><span
      @click="popupTopRight=false">关闭</span></popup>

    <button @click="popupBottom=true">从下弹出</button>
    <popup v-model="popupBottom" :position="'bottom'" style="background-color: red"><span
      @click="popupBottom=false">关闭</span></popup>

    <button @click="popupRight=true">从右弹出</button>
    <popup v-model="popupRight" :width="'200px'" style="background-color: red"><span @click="popupRight=false">关闭</span>
    </popup>
    <br>

    <div style="background-color: silver;padding: 20px">
      <zinput v-model="search" @submit="submit" @clear="clear"></zinput>
    </div>

    <search v-model="search" @submit="submit" @cancel="cancel" @clear="clear"></search>
    <br>

    <touch style="height: 100px; width: 100%;background-color: bisque" @holding="holding" :time="3000">touch</touch>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Zcon, Toast, Loading, Popup, Zinput, Search, Touch} from '../../index'
  export default {
    name: '',
    props: [],
    components: {Zcon, Toast, Loading, Popup, Zinput, Search, Touch},
    data () {
      return {
        toast: false,
        toastLoading: false,
        popupTop: false,
        popupTopLeft: false,
        popupTopRight: false,
        popupBottom: false,
        popupRight: false,
        zinput: '',
        search: ''
      }
    },
    mounted () {
    },
    methods: {
      submit () {
        console.log(this.search)
      },
      cancel () {
        console.log(this.search)
      },
      clear () {
        console.log(this.search)
      },
      holding () {
        alert('长按弹出，time设定长按事件，默认1s')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
