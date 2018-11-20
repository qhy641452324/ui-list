<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div v-if="showDot" class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    name: 'z-slider',
    props: {
      loop: { //支持循环轮播。默认就好。无需设置
        type: Boolean,
        default: true
      },
      autoPlay: { // 开启自动轮播
        type: Boolean,
        default: false
      },
      interval: { //轮播间隔
        type: Number,
        default: 4000
      },
      showDot: {
        type: Boolean,
        default: true
      },
      click: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    mounted () {
      this.sliderRefresh()
    },
    methods: {
      sliderRefresh () {
        if (this.slider) {
          this.slider.destroy()
        }
        this.$nextTick(() => {
          this.init()
        })
      },
      init () {
        clearTimeout(this.timer)
        this.currentPageIndex = 0
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
        this._play()
      },
      _setSliderWidth () {
        this.children = this.$refs.sliderGroup.children

        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          this.addClass(child, 'slider-item')

          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        if (this.loop) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          probeType: 3,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          },
          bounce: false,
          stopPropagation: true,
          click: this.click
        })

        this.slider.on('scrollEnd', () => {
          this.currentPageIndex = this.slider.getCurrentPage().pageX
          this.$emit('change', this.currentPageIndex)
          this._play()
        })

        this.slider.on('scroll', this._onScroll)
      },
      _initDots () {
        if (this.showDot) {
          this.dots = new Array(this.children.length)
        }
      },
      _play () {
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.slider.next()
          }, this.interval)
        }
      },
      _onScroll(pos) {
        this.$emit('scroll', pos)
      },
      goToPage (page) {
        this.slider && this.slider.goToPage(page)
      },
      addClass (el, className) {
        let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
        if (!reg.test(el.className)) {
          let newClass = el.className.split(' ')
          newClass.push(className)
          el.className = newClass.join(' ')
        }
      }
    },
    watch: {
      autoPlay () {
        this.sliderRefresh()
      },
      interval () {
        this.sliderRefresh()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "slider.styl";
</style>
