<template>
  <z-page :title="'Star'">
    <div style="margin-top: 20px">
      可点击和回调
      <z-star :score="4.7" startClick @starChoose="starChoose"></z-star>
    </div>

    <div style="margin-top: 20px">
      不可点击
      <z-star :score="3" :size="12" style="margin-top: 20px"></z-star>
    </div>
    <div style="margin-top: 20px">
      可点击无回调
      <z-star :score="3" :size="15" startClick :right="5" style="margin-top: 20px"></z-star>
    </div>
    <div style="margin-top: 20px">
      不可点击
      <z-star :score="3" :size="30" :right="15" style="margin-top: 20px"></z-star>
    </div>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZStar} from '../../index'
  export default {
    name: 'star',
    props: [],
    components: {ZPage, ZStar},
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      starChoose (stars) {
        alert(stars + '颗星星')
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
