(function () {
  function Router() {
    this.routes = {}
    this.currentUrl = ''
  }
  Router.prototype.route = (function () {
    var navWrap = document.querySelector('.toolNavHook'),
      aA = navWrap.getElementsByTagName('a'),
      aLi = document.querySelectorAll('.toolItemHook')
    return function (path) {
      var _path = path.slice(1)
      this.routes[path] = function () {
        // navigator
        [].map.call(aA, function (item) {
          var _href = item.getAttribute('href').slice(2)
          if (_href === _path)
            utils.addClass(item, 'active')
          else
            utils.removeClass(item, 'active')
        });
        // pages
        [].map.call(aLi, function (item) {
          item.style.display = item.id === _path ? 'block' : 'none'
        })
      };
    };
  }())
  Router.prototype.refresh = function () {
    var _hash = location.hash
    if (!_hash) {
      _hash = '#/token'
      location.hash = _hash
    }
    this.currentUrl = _hash.slice(1)
    this.routes[this.currentUrl]()
  };
  Router.prototype.init = function () {
    window.addEventListener('DOMContentLoaded', this.refresh.bind(this), false)
    window.addEventListener('hashchange', this.refresh.bind(this), false)
  }
  // 实例化路由
  router = new Router()
  // 注册页面
  router.route('/token')
  router.route('/tranfer')
  router.route('/config')
  router.route('/owner')
  router.route('/accredit')
  router.route('/clock')
  router.route('/sale')
  router.route('/supplier')
  router.route('/create')
  router.route('/modify')
  //初始化调用
  router.init()
}())
