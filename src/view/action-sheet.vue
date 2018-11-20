<template>
  <z-page :title="'Action Sheet'">
    <button @click="show1=true">默认弹出</button>
    <z-action-sheet v-model="show1" :data="data" :title="'我就是一个标题'" @change="change"></z-action-sheet>

    <button @click="show2=true">弹出取消在下边的,并且遮罩不可点击</button>
    <z-action-sheet v-model="show2" :data="data" bottomCancel :title="'我就是一个标题'"
                    :maskClick="false" @change="change"></z-action-sheet>

    <button @click="show3=true">弹出有默认值的</button>
    <z-action-sheet v-model="show3" :data="data" :title="'我就是一个标题'"
                    :active="'览博网'" @change="change"></z-action-sheet>

    <button @click="show4=true">弹出自定义title</button>
    <z-action-sheet v-model="show4" :data="data" hideTitle
                    :active="'instrument'" @change="change">
      <div slot="title">哈哈</div>
    </z-action-sheet>

    <div style="font-size: 13px;margin-top: 20px">
      <ul style="line-height: 1.5">
        <li>1.v-model 绑定一个Boolean类型用于显示action sheet</li>
        <li>2.title:String,title文本。注意：有slot='title'可自定义整个title样式和信息</li>
        <li>3.active:null,任何类型，传递一个，默认选中的值,注意传递的无论是value还是label都支持哦</li>
        <li>4.cancelText:String,默认:取消，取消文本描述</li>
        <li>5.data:ArrayMap,组件的list数据,格式: {value:'', label:''},当然，值也可以是数字。value是用来判定的值，类似select中option的value，label是描述，显示的文字</li>
        <li>6.bottomCancel:Boolean,默认: false, 底部取消按钮。如果为true，则title的取消按钮隐藏</li>
        <li>7.maskClick:Boolean,默认: true, 是否允许遮罩层点击关闭</li>
        <li>8.change:event,当选中数据时候的回调事件</li>
        <li>9.close:event,当关闭组件后回调事件</li>
        <li>10.hideTitle:boolean，默认false,可以隐藏title，提供 slot=title自定义头部</li>
      </ul>
    </div>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZActionSheet, ZPage} from '../../index'
  export default {
    name: 'popup',
    props: [],
    components: {ZActionSheet, ZPage},
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        data: [{value: 'lab', label: '览博网'}, {value: 'instrument', label: '好仪器'}, {value: 'app', label: '好应用'}]
      }
    },
    mounted () {
    },
    methods: {
      change (val) {
        alert(val)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
