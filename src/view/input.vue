<template>
  <z-page :title="'ZInput && ZSearch'">
    <div style="padding-top: 40px">
      <button @click="setFocus">获取焦点</button>
      <z-input v-model="search" @submit="submit" @clear="clear"></z-input>
      <z-input v-model="search" @submit="submit" @clear="clear" ref="fff"></z-input>
    </div>

    <div style="padding-top: 40px">
      <z-search v-model="search" @submit="submit" @cancel="cancel" @clear="clear"></z-search>
      <z-search v-model="search" @submit="submit" @cancel="cancel" @clear="clear"></z-search>
    </div>
  </z-page>
</template>

<script type="text/ecmascript-6">
  import {ZPage, ZInput, ZSearch} from '../../index'
  export default {
    name: 'input-search',
    props: [],
    components: {ZPage, ZInput, ZSearch},
    data () {
      return {
        search: undefined
      }
    },
    mounted () {
    },
    methods: {
      setFocus () {
        this.$refs.fff.setFocus()
      },
      submit () {
        alert('submit:' + this.search)
      },
      cancel () {
        alert('cancel:' + this.search)
      },
      clear () {
        alert('clear:' + this.search)
      },
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
