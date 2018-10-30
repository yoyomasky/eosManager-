(function () {
  // 验证器
  function Validator(rules, name) {
    this.val = ''
    this.rules = rules
    this.name = name
  }
  Validator.prototype = {
    // 是否通过验证
    is_valid: function (val) {
      this.val = val
      for (var key in this.rules) {
        var r = this['validator_' + key]()
        if (r === false) return false
      }
      return true
    }
  }
  // 挂载验证器
  function Input(node) {
    this.el = typeof node === 'object' ? node : document.querySelector(selector)
    // 验证规则
    this.rules = {
      required: true
    }
    this.parse_rules()
    this.validator = new Validator(this.rules, this.getName())
  }
  Input.prototype = {
    parse_rules: function () {
      var rules_str = this.el.getAttribute('data-rule')
      if (!rules_str) return
      var rules_arr = rules_str.split('|')
      for (var i = 0, item; item = rules_arr[i++];) {
        var item_arr = item.split(':')
        this.rules[item_arr[0]] = JSON.parse(item_arr[1])
      }
    },
    get_val: function () {
      return this.el.value.trim()
    },
    getName() {
      var dom = this.el.parentNode.querySelector('label')
      return dom.innerText
    }
  }
  // 验证函数封装
  function verify(wrap, callBack) {
    var cb = callBack || function () {}
    var inputs = []
    var $inputs = document.querySelectorAll(wrap + ' [data-rule]')
    Array.prototype.map.call($inputs, function (item) {
      var instance = new Input(item)
      inputs.push(instance)
    })
    // 验证
    document.querySelector(wrap + ' .toolSubmit').addEventListener('click', function () {
      var isOk = true
      for (var i = 0, item; item = inputs[i++];) {
        var val = item.get_val()
        var res = item.validator.is_valid(val)
        if (!res) {
          isOk = false
          return false
        }
      }
      if (isOk) cb()
    }, false)
  }
  window.verify = verify
  window.validator_rules = Validator.prototype
}())
