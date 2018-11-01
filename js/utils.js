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
  },
  loading: {
    create: function (wrap, colspanLen) {
      var loading = document.createElement('tr')
      loading.innerHTML = `
      <td colspan='${colspanLen}'>
        <div class="mf-table-loading">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
          <path fill="#0db09c" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </td>
      `
      wrap.innerHTML = ''
      wrap.appendChild(loading)
      return loading
    },
    remove: function (wrap, el) {
      wrap.removeChild(el)
    }
  }
}