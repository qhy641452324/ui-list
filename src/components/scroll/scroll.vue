<template>
  <div style="position: relative;overflow: hidden;" ref="zscroll">
    <div ref="wrapper" style="overflow: hidden;">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    name: 'z-scroll',
    props: {
      probeType: {
        type: Number,
        default: 3
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      hideScrollBar: {
        type: Boolean,
        default: false
      },
      scrollbarEndHidden: { //true:滚动条滑动停止之后慢慢隐藏
        type: Boolean,
        default: true
      },
      scrollX: {
        type: Boolean,
        default: false
      },
      scrollY: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number,
        default: 0
      },
      autoHeight: {
        type: Boolean,
        default: true
      },
      width: Number
    },
    mounted () {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll () {
        if (this.scrollY && this.autoHeight) {
          this.$refs.zscroll.style.height = (document.documentElement.clientHeight + this.height) + 'px'
        }
        if (this.scrollX && this.width) {
          this.$refs.wrapper.style.width = this.width + 'px'
        }

        if (!this.$refs.zscroll) {
          return
        }
        this.zscroll = new BScroll(this.$refs.zscroll, {
          probeType: this.probeType,
          click: this.click,
          scrollbar: this.hideScrollBar ? false : {fade: this.scrollbarEndHidden},
          scrollX: this.scrollX,
          scrollY: this.scrollY
        })

        if (this.listenScroll) {
          let me = this
          this.zscroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
          this.zscroll.on('scrollEnd', (pos) => {
            me.$emit('scrollEnd', pos)
          })
        }
      },
      disable () {
        this.zscroll && this.zscroll.disable()
      },
      enable () {
        this.zscroll && this.zscroll.enable()
      },
      refresh () {
        this.zscroll && this.zscroll.refresh()
      },
      scrollTo () {
        this.zscroll && this.zscroll.scrollTo.apply(this.zscroll, arguments)
      },
      // 代理better-scroll的scrollToElement方法
      scrollToElement () {
        this.zscroll && this.zscroll.scrollToElement.apply(this.zscroll, arguments)
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
