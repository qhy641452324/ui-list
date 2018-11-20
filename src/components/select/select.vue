<template>
  <picker v-model="show" :title="title" :maskClick="maskClick"
          :cancelText="cancelText" :okText="okText" :zIndex="zIndex" @ok="ok">
    <div class="z-select-content-wrapper">
      <div class="mask-top"></div>
      <div class="mask-down"></div>
      <div class="content" ref="group">
        <div class="z-select-scroll-wrapper" v-for="(data, index) in dataList" :key="index">
          <div class="select-container">
            <div v-for="d in data" class="selection-item">{{d}}</div>
          </div>
        </div>
      </div>
    </div>
  </picker>
</template>

<script type="text/ecmascript-6">
  import Picker from '../popup/picker.vue'
  import BScroll from 'better-scroll'
  import {popupZIndex} from '../../common/js/common'
  export default {
    name: 'z-select',
    props: {
      value: Boolean,
      title: String,
      cancelText: String,
      okText: String,
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      selectedIndex: { // 默认选中的下标数组（支持填写文本信息）
        type: Array,
        default: function () {
          return []
        }
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      columns: {
        type: Boolean,
        default: false
      },
      zIndex: Number
    },
    components: {Picker},
    data () {
      return {
        show: false,
        dataList: [],
        selectList: [],
        moving: false, // 移动中的时候，不允许点击确定。必须等待移动结束,
        selected: [] // 默认选中的下标
      }
    },
    mounted () {
    },
    methods: {
      resetData () {
        if (!this.columns) { //默认只有一列select
          this.dataList = [this.data]
        } else { // 多列select
          this.dataList = this.data
        }

        // 选中确定之后，弹出框消失，再次打开，应该默认选中上次确认的，所以后面不用再次初始化默认选中的数据
        if (this.selected.length > 0) {
          return
        }

        // 初始化默认选中,只在创建的时候执行
        for (let i = 0; i < this.dataList.length; i++) {
          this.selected[i] = 0 //默认选中第一个
          if (this.selectedIndex && this.selectedIndex[i] && 'number' !== typeof this.selectedIndex[i]) { //默认选中传递的不是下标数字而是数值字符串
            for (let j = 0; j < this.dataList[i].length; j++) {
              if (this.dataList[i][j] === this.selectedIndex[i]) {
                this.selected[i] = j
              }
            }
          } else if (this.selectedIndex && this.selectedIndex[i]) {
            this.selected[i] = this.selectedIndex[i]
          }
        }
      },
      createSelect () {
        this.$nextTick(() => {
          for (let i = 0; i < this.dataList.length; i++) {
            let scroll = new BScroll(this.$refs.group.children[i], {
              wheel: {
                selectedIndex: this.selected.length > 0 ? this.selected[i] : 0,
                wheelWrapperClass: 'select-container',
                wheelItemClass: 'selection-item'
              },
              probeType: 3,
              scrollbar: false,
              observeDOM: false // 不自动渲染，数据更新需要手动refresh
            })
            let _this = this
            scroll.on('scrollEnd', (pos) => {
              _this.scrollEnd(pos, i)
              _this.moving = false
            })
            scroll.on('scroll', () => {
              _this.moving = true
            })
            this.selectList.push(scroll)
          }
        })
      },
      close () {
        this.show = false
        this.$emit('close')
        this.$emit('input', false)
      },
      ok () {
        if (this.moving) {
          return
        }
        let res = {value: [], index: []}
        for (let i in this.selected) {
          res.index.push(this.selected[i])
          res.value.push(this.dataList[i][this.selected[i]])
        }

        this.$emit('ok', res)
        this.close()
      },
      scrollEnd (pos, index) {
        if (!this.dataList || this.dataList.length <= 0) {
          return
        }
        let y = pos.y < 0 ? -pos.y : pos.y
        let number = (y / 36).toFixed(0)
        this.selected[index] = number
      }
    },
    watch: {
      value (val) {
        this.show = val
        if (val) {
          this.resetData()
          this.createSelect()
        } else {
          this.dataList = []
          this.selectList = []
        }
      },
      show (val) {
        this.$emit('input', val)
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .z-select-content-wrapper
    position relative
    .mask-top
    .mask-down
      position absolute
      left 0
      width 100%
      height 72px
      z-index 10
      pointer-events: none;
    .mask-top
      top 0
      background linear-gradient(0deg, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8))
    .mask-down
      bottom 0
      background linear-gradient(180deg, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8))
    .content
      displayFlex()
      .z-select-scroll-wrapper
        height 180px
        overflow: hidden
        flex(1)
        .select-container
          margin-top: 72px
          margin-bottom: 72px
          .selection-item
            height: 36px;
            line-height: 36px
            text-align center
            overflow: hidden
            white-space: nowrap
            color: $select-text
            font-size: $font-size-large-xx
</style>
