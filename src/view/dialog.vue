<template>
  <z-page :title="'Dialog'">
    <div class="demo1">
      <button @click="show1 = !show1">弹出默认dialog</button>
      <z-dialog :title="'标题1'" v-model="show1" @ok="ok" @cancel="cancel">
        asdasdasdasasdasdasdasasdasdasdasasdasdasdas
        asdasdasdasasdasdasdasasdasdasdasasdasdasdas
        asdasdasdasasdasdasdasasdasdasdasasdasdasdas
        asdasdasdas
      </z-dialog>
    </div>
    <div class="demo2">
      <button @click="show2 = !show2">弹出取消遮罩点击的dialog,取消右上角x,自定义取消文本</button>
      <z-dialog :title="'标题2'" v-model="show2" :maskClick="false" :closeIcon="false" :cancelText="'我是取消'">
        写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容
        写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容
      </z-dialog>
    </div>
    <div class="demo3">
      <button @click="show3 = !show3">弹出自定义标题,自定义确定按钮文本</button>
      <z-dialog v-model="show3" :okText="'我是确定'">
        <div slot="title" style="color: red">
          <div>
            <i class="zu-question" style="font-size: 30px"></i>
          </div>
          <div>
            自定义title
          </div>
        </div>
        写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容
        写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容
      </z-dialog>
    </div>
    <div class="demo4">
      <button @click="show4 = !show4">点击弹出：取消全部按钮,自定义宽度</button>
      <z-dialog v-model="show4" cancelHide okHide :width="200">
        <div slot="title" style="color: red">
          <div>
            <i class="zu-question" style="font-size: 30px"></i>
          </div>
          <div>
            自定义title
          </div>
        </div>
        写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容
        写一些内容写一些内容写一些内容写一些内容写一些内容写一些内容
      </z-dialog>
    </div>

    <div style="margin-top: 20px;font-size: 12px">
      <ul style="line-height: 1.5">
        <li>API:</li>
        <li>1.使用v-model绑定弹出框，属性Boolean</li>
        <li>2.title:String,可以设定弹出框标题，也提供slot='title'自定义区域，可自定义整个title区域样式和描述</li>
        <li>3.cancelHide:Boolean,默认false，是否隐藏取消按钮</li>
        <li>4.okHide:Boolean,默认false，是否隐藏确定按钮</li>
        <li>5.提供slot='footer'对整个底部button区域自定义</li>
        <li>6.maskClick:Boolean,默认true,是否点击遮罩隐藏弹出框</li>
        <li>7.width:Number,默认可视窗口的4／5宽度，定义弹出框宽度</li>
        <li>8.okText:String,默认:确定, 确定按钮的文本</li>
        <li>9.cancelText:String,默认:取消, 取消按钮的文本</li>
        <li>10.transition:String,默认弹出框慢慢弹出。可以自定义弹出框弹出动画</li>
        <li>11.closeIcon:Boolean,默认true。是否显示右上角关闭x</li>
        <li>12.ok:event,点击确定的回调事件</li>
        <li>13.cancel:event,点击取消的回调事件</li>
      </ul>
    </div>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZDialog} from '../../index'
  export default {
    name: 'zdialog',
    props: [],
    components: {ZPage, ZDialog},
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      }
    },
    mounted () {
    },
    methods: {
      ok () {
        alert('ok')
      },
      cancel () {
        alert('cancel')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
