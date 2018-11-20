<template>
  <z-page :title="'Select'">
    <button @click="show1=true">弹出一个select,点击遮罩不允许关闭</button>
    <z-select v-model="show1" :data="data1" :title="'我就是一个标题'" @ok="ok" :maskClick="false"></z-select>

    <button @click="show2=true">弹出多个select</button>
    <z-select v-model="show2" :data="data2" :title="'我就是一个标题'" columns @ok="ok" :selectedIndex="selectedIndex2"></z-select>

    <div style="font-size: 13px;margin-top: 20px">
      <ul style="line-height: 1.5">
        <li>1.v-model 绑定一个Boolean类型用于显示select</li>
        <li>2.data:数组,例如['select1','select2','select3']</li>
        <li>3.columns:Boolean,默认false,开启之后可以有多个select并行（不建议过多）,data设置为二维数组，例如[['select1','select2','select3'],
          ["你好1","你好2","你好3"]]
        </li>
        <li>4.cancelText:String,默认取消,设置取消的文本</li>
        <li>5.okText:String,默认确定,设置确定的文本</li>
        <li>6.maskClick:Boolean,默认false, 允许遮罩层点击关闭</li>
        <li>7.zIndex:Number,默认200, fixed布局，z-index大小</li>
        <li>8.selectedIndex: 数组, 值可以是下标或者数据文本，默认选中的值</li>
      </ul>
    </div>

    <z-dialog v-model="dialogShow" :title="'标题1'" okHide>
      {{result}}
    </z-dialog>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZSelect, ZPage, ZDialog} from '../../index'
  export default {
    name: 'selection',
    props: [],
    components: {ZSelect, ZPage, ZDialog},
    data () {
      return {
        dialogShow: false,
        show1: false,
        show2: false,
        data1: ['你好1', '你好2', '你好3', '你好4'],
        selectedIndex1: [2],
        data2: [['览博网', '好仪器', '好应用', '好应用', '好应用', '好应用', '好应用', '好应用'],
          [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]],
        selectedIndex2: ['好仪器', 2],
        result: undefined
      }
    },
    mounted () {
    },
    methods: {
      ok (val) {
        this.result = val
        this.dialogShow = true
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
