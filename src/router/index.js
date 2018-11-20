import Vue from 'vue'
import Router from 'vue-router'
import Loading from '../view/loading.vue'
import TouchTab from '../view/touch-tab.vue'
import Input from '../view/input.vue'
import Popup from '../view/popup.vue'
import Toast from '../view/toast.vue'
import Star from '../view/star.vue'
import Icon from '../view/icon.vue'
import Page from '../view/page.vue'
import Scroll from '../view/scroll.vue'
import ScrollLoad from '../view/scroll-load.vue'
import Slider from '../view/slider.vue'
import Touch from '../view/touch.vue'
import Menu from '../view/menu.vue'
import Dialog from '../view/dialog.vue'
import ActionSheet from '../view/action-sheet.vue'
import Select from '../view/select.vue'
import list from '../view/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/tab',
      name: 'tab',
      component: TouchTab
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/popup',
      name: 'popup',
      component: Popup
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/star',
      name: 'star',
      component: Star
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: Scroll
    },
    {
      path: '/scroll/load',
      name: 'scrollLoad',
      component: ScrollLoad
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/touch',
      name: 'touch',
      component: Touch
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/action-sheet',
      name: 'action-sheet',
      component: ActionSheet
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    }
  ]
})
