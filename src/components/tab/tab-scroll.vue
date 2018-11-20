<template>
  <div class="z-tab-scroll-wrapper">
    <div class="z-tab-bar">
      <z-tab :data="data" slider :defaultIndex="index" :useTransition="false" @change="tabChange" ref="tab"/>
    </div>
    <div class="z-tab-content-wrapper">
      <slider :loop="false" :showDot="false" @scroll="scroll" @change="change" ref="slider">
        <slot name="content">
        </slot>
      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ZTab from './tab.vue'
  import Slider from './../slider/slider.vue'
  export default {
    name: 'z-tab-scroll',
    props: {
      defaultIndex: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default: []
      },
    },
    components: {ZTab, Slider},
    data () {
      return {
        index: 0
      }
    },
    mounted () {
      this.index = this.defaultIndex
      this.$nextTick(() => {
        this.$refs.slider.goToPage(this.defaultIndex)
      })
    },
    methods: {
      tabChange (selection) {
        let page = selection.index
        this.$refs.slider.goToPage(page)
        this.$emit('change', selection)
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tab.$el.clientWidth
        const slideScrollerWidth = this.$refs.slider.slider.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tab.moveSlider(deltaX)
      },
      change (index) {
        this.index = index
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
