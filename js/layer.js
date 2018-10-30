(function (win, doc) {
  var layer_css = ''

  function Layer(msg, interval) {
    this.msg = msg
    this.interval = interval || 2000
    this.dom = ''
  }
  Layer.prototype = {
    init: function () {
      this.setStyle()
      this.life()
      return this
    },
    setStyle: function () {
      if (layer_css) return
      var _style = doc.createElement('style')
      _style.innerText = '.mf-layer-hint{z-index:91025;position:fixed;left:50%;bottom:30%;height:30px;padding:0 10px;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);line-height:30px;font-size:14px;color:#fff;background-color:rgba(0,0,0,0.8);border-radius:4px}.mf-layer-in{-webkit-animation:mf-layer-in .1s ease-in-out;animation:mf-layer-in .1s ease-in-out}.mf-layer-out{-webkit-animation:mf-layer-out .25s linear;animation:mf-layer-out .25s linear}@-webkit-keyframes mf-layer-in{from{bottom:10%}to{bottom:30%}}@keyframes mf-layer-in{from{bottom:10%}to{bottom:30%}}@-webkit-keyframes mf-layer-out{from{opacity:1;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}to{opacity:0;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}}@keyframes mf-layer-out{from{opacity:1;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}to{opacity:0;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}}'
      doc.querySelector('head').appendChild(_style)
      layer_css = _style
    },
    create: function () {
      var dom = doc.createElement('div')
      dom.className = 'mf-layer-hint mf-layer-in'
      dom.innerText = this.msg
      doc.body.appendChild(dom)
      this.dom = dom
    },
    life: function () {
      this.create()
      var _this = this
      setTimeout(function () {
        var el = _this.dom
        if (el) {
          el.className = el.className.replace('-in', '-out')
          setTimeout(function () {
            _this.destory()
          }, 200)
        }
      }, this.interval)
    },
    destory: function () {
      if (this.dom) {
        doc.body.removeChild(this.dom)
        this.dom = ''
      }
    }
  }
  win.layer = (function () {
    var instance;
    return function (msg, interval) {
      if (instance && instance.dom) instance.destory()
      instance = new Layer(msg, interval).init()
      return instance
    }
  })()
})(window, document)
