<template>
  <div class="z-tab-wrapper">
    <div class="z-tab-list" ref="tabGroup">
      <slot>
        <div class="z-item" v-for="(item,index) in data" :key="item.label" @click="itemChange(index)"
             :class="{'active':value===index}">
          <span v-html="item.label"></span>
          <i v-if="item.icon" :class="item.icon"></i>
        </div>
      </slot>
    </div>
    <div v-if="slider" ref="slider" class="z-tab-bar-slider"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'z-tab',
    props: {
      defaultIndex: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default: []
      },
      slider: {
        type: Boolean,
        default: false
      },
      useTransition: {
        type: Boolean,
        default: true
      },
      transitionSecond: {
        type: String,
        default: '0.2s'
      }
    },
    components: {},
    data () {
      return {
        value: undefined,
        tabs: []
      }
    },
    mounted () {
      this.initDefaultValue()
    },
    methods: {
      initDefaultValue () {
        this.value = this.defaultIndex

        if (this.slider) {
          let childList = this.$refs.tabGroup.children
          for (let i = 0; i < childList.length; i++) {
            this.tabs.push({index: i, width: childList[i].clientWidth})
          }
          if (this.useTransition) this.$refs.slider.style['transition'] = `all ${this.transitionSecond} linear`
        }
      },
      itemChange (index) {
        this.value = index
      },
      updateSliderStyle () {
        if (!this.slider) {
          return
        }

        let moveWidth = 0
        this.tabs.forEach(t => {
          if (t.index === this.value) { // reset slider width
            this.$refs.slider.style.width = `${t.width}px`
          }
          if (t.index < this.value) { //这里只需要判断最新位置即可。translateX每次都会初始化比如：1->2左移动120px，2->3是240px，并不是120px。每次从头移动
            moveWidth += t.width
          }
        })
        this.moveSlider(moveWidth)
      },
      moveSlider (moveWidth) {
        this.$refs.slider.style['transform'] = `translateX(${moveWidth}px) translateZ(0)`
      }
    },
    watch: {
      value (newV) {
        this.updateSliderStyle()
        this.$emit('change', {index: newV, label: this.data[newV].label})
      },
      defaultIndex (newV) {
        this.value = newV
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .z-tab-wrapper
    position: relative
    .z-tab-list
      display flex
      align-content: center
      justify-content: center
      .z-item
        flex 1
        padding: 7px 0
        text-align: center
        color $title-color
        &.active
          color $choose-color
    .z-tab-bar-slider
      position: absolute
      left: 0
      bottom: 0
      height: 2px
      width: 20px
      background-color $choose-color
</style>
