/**
 * Created by zhang.lu on 2018/6/27.
 * 已废除， 华为机型不兼容
 */
function ZTouch(el) {
  var _this = this
  this.el = el
  this.startClientX = 0
  this.startClientY = 0
  this.endClientX = 0
  this.endClientY = 0
  this.el.addEventListener('touchstart', function (e) {
    _this.touchStart(e)
  }, false)
  this.el.addEventListener('touchend', function (e) {
    _this.touchEnd(e)
  }, false)

  /**
   * 开启向左滑动
   * @param moveLeft 向左滑动的距离阀值, Number
   * @param callback 向左滑动回调
   */
  this.moveLeftOpen = function (callback, moveLeft) {
    this.sliderLeft = true
    this.moveLeft = moveLeft && moveLeft > 0 ? moveLeft : document.documentElement.clientWidth / 2
    this.moveLeftCallback = callback
  }

  /**
   * 开启向右滑动
   * @param moveRight 向左滑动的距离阀值, Number
   * @param callback 向左滑动回调
   */
  this.moveRightOpen = function (callback, moveRight) {
    this.sliderRight = true
    this.moveRight = moveRight && moveRight > 0 ? moveRight : document.documentElement.clientWidth / 2
    this.moveRightCallback = callback
  }

  this.touchStart = function (e) {
    this.startClientX = e.touches[0].pageX
    this.startClientY = e.touches[0].pageY
  }

  this.touchEnd = function (e) {
    this.endClientX = e.changedTouches[0].pageX
    this.endClientY = e.changedTouches[0].pageY

    let move = this.endClientX - this.startClientX // 左负数右正数
    if (move > 0) { //向右滑动
      if (this.sliderRight && move > this.moveRight) {
        this.moveRightCallback()
      }
    } else if (move < 0) { //向左滑动
      move = -move
      if (this.sliderLeft && move > this.moveLeft) {
        this.moveLeftCallback()
      }
    } else {
      // TODO click事件
    }
  }

  /**
   * 销毁事件
   * 这个方法暂时没啥用。因为所有事件封装为对象。并且是对某个div元素进行绑定。如果传过来是整个document或者window。需要手动调用销毁
   */
  this.destroyed = function () {
    this.el.removeEventListener('touchstart', function (e) {
      _this.touchStart(e)
    }, false)
    this.el.removeEventListener('touchend', function (e) {
      _this.touchEnd(e)
    }, false)
  }
}

export {ZTouch}
