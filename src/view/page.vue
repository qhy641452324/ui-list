<template>
  <z-page :title="'Page'" :height="60" noBack @back="back">
    <div slot="left">这里slot为'left'，可自定义</div>
    <div slot="right">这里slot为'right'，可自定义</div>
    <ul class="url-list">
      <li>这里是page的内容</li>
      <li>page是一个自带header的过渡动画div。可以自定义transition</li>
      <li>from: 'left'和'right'(默认)，可以定义从某个方向弹出</li>
      <li>height: Number类型，定义header高度</li>
      <li>title: String类型，定义header主题内容</li>
      <li>transition: 可以自定义动画而不是用自带的过渡效果</li>
      <li>noBack: Boolean, 可以阻止header左边文字的事件，使用自己的事件,默认false</li>
      <li>back: 事件, 自定义header左文字事件，需要noBack=true</li>
    </ul>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage} from '../../index'
  export default {
    name: 'Page',
    props: [],
    components: {ZPage},
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      back () {
        alert('自定义back事件')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
.url-list
  li
    padding 10px
</style>
