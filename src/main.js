// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import App from './App'
import router from './router'
import './common/stylus/index.styl'

Vue.config.productionTip = false

router.back = function () {
  store.state.common.routeTransition = 'back'
  router.go(-1)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
