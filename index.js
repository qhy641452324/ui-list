import ZScrollLoad from './src/components/scroll-load/scroll-load.vue'
import ZLoading from './src/components/loading/loading.vue'
import ZStar from './src/components/star/star.vue'
import ZScroll from './src/components/scroll/scroll.vue'
import ZSlider from './src/components/slider/slider.vue'
import Zcon from './src/components/icon/z-icon.vue'
import ZToast from './src/components/toast/toast.vue'
import ZPopup from './src/components/popup/popup.vue'
import ZInput from './src/components/input/z-input.vue'
import ZSearch from './src/components/search/search.vue'
import ZPage from './src/components/page/page.vue'
import ZHeader from './src/components/page/header.vue'
import ZTouch from './src/components/touch/touch.vue'
import ZTab from './src/components/tab/tab.vue'
import ZTabScroll from './src/components/tab/tab-scroll.vue'
import ZMenu from './src/components/menu/menu.vue'
import ZDialog from './src/components/dialog/dialog.vue'
import ZActionSheet from './src/components/action-sheet/action-sheet.vue'
import ZSelect from './src/components/select/select.vue'

var components = [
  ZScrollLoad,
  ZLoading,
  ZStar,
  ZScroll,
  ZSlider,
  Zcon,
  ZToast,
  ZPopup,
  ZInput,
  ZSearch,
  ZPage,
  ZHeader,
  ZTouch,
  ZTab,
  ZTabScroll,
  ZMenu,
  ZDialog,
  ZActionSheet,
  ZSelect
]

var ZPhoneUI = {
  install (Vue) {
    components.forEach(com => {
      Vue.component(com.name, com)
    })
  }
}

export {
  // ZPhoneUI, 华为手机不支持callback。 暂时去掉全局注册
  ZScrollLoad,
  ZLoading,
  ZStar,
  ZScroll,
  ZSlider,
  Zcon,
  ZToast,
  ZPopup,
  ZInput,
  ZSearch,
  ZPage,
  ZHeader,
  ZTouch,
  ZTab,
  ZTabScroll,
  ZMenu,
  ZDialog,
  ZActionSheet,
  ZSelect
}
