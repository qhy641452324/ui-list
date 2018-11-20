<template>
  <div class="star">
    <div class="star-item" ref="starItems">
      <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item"
            :style="{'padding-right': right +'px','width': size + 'px','height': size + 'px','background-size': size + 'px'}"
            @click="choose(index)"
      >{{itemClass}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ON = 'on'
  const OFF = 'off'
  const HALF = 'half'
  export default {
    name: 'z-star',
    props: {
      size: {
        type: Number,
        default: 20
      },
      score: {
        type: Number,
        default: 5
      },
      right: {
        type: Number,
        default: 3
      },
      startClick: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        length: 5,
        itemClasses: []
      }
    },
    mounted () {
      this.initItemClasses()
    },
    methods: {
      initItemClasses () {
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          this.itemClasses.push(ON);
        }
        if (hasDecimal) {
          this.itemClasses.push(HALF);
        }
        while (this.itemClasses.length < this.length) {
          this.itemClasses.push(OFF);
        }
      },
      choose (starIndex) {
        if (!this.startClick) {
          return
        }
        for (let i = 0; i < this.length; i++) {
          if (i <= starIndex) {
            this.itemClasses.splice(i, 1, ON)
          } else {
            this.itemClasses.splice(i, 1, OFF)
          }
        }

        let stars = this.itemClasses.filter(item => item === ON).length;
        this.$emit('starChoose', stars)
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "star.styl";
</style>
