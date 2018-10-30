var utils = {
  hasClass: function (obj, klass) {
    var _class = obj.className
    var reg = new RegExp('(^|\\s+)' + klass + '(\\s+|$)', 'i')
    return reg.test(_class)
  },
  addClass: function (obj, klass) {
    if (!this.hasClass(obj, klass)) {
      obj.className += (' ' + klass).trim()
    }
  },
  removeClass: function (obj, klass) {
    if (this.hasClass(obj, klass)) {
      _class = obj.className.replace(klass, '')
      obj.className = _class.trim()
    }
  },
  tabMenu: function (navWrap, contentWrap) {
    var _this = this
    var aA = document.querySelectorAll(navWrap + ' a')
    var aLi = document.querySelectorAll(contentWrap + ' li')
    Array.prototype.map.call(aA, function (item, index) {
      item.addEventListener('click', function () {
        for (var i = 0, item; item = aA[i++];) {
          _this.removeClass(item, 'active')
        }
        _this.addClass(this, 'active')
        for (var i = 0, item; item = aLi[i++];) {
          item.style.display = 'none'
        }
        aLi[index].style.display = 'block'
      }, false)
    })
  }
}
