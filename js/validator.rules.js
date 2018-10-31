;
(function (r, m) {
  // 提示信息
  function vLayer(msg) {
     layer.msg(this.name + msg);
  }
  // 输入不为空
  r.validator_required = function () {
    if (this.rules.required && this.val === '') {
      vLayer.call(this, m.required)
      return false
    }
  }
  // 正则验证
  r.validator_pattern = function () {
    var p = this.rules.pattern.split('__')
    var reg = new RegExp(p[1], p[2])
    if (!reg.test(this.val)) {
      vLayer.call(this, m.pattern[p[0]])
      return false
    }
  }
  // 验证是否为数字
  r.validator_isNumeric = function () {
    var re = /^(0|[1-9]\d*)(\.\d+)?$/
    if (!re.test(this.val)) {
      vLayer.call(this, m.isNumeric)
      return false
    }
    return true
  }
  // 验证最大值
  r.validator_max = function () {
    if (!this.validator_isNumeric()) {
      return false
    }
    var maxNum = this.rules.max
    if (this.val > maxNum) {
      var _msg = m.max.replace('n', maxNum)
      vLayer.call(this, _msg)
      return false
    }
  }
  // 验证最大长度
  r.validator_maxLength = function () {
    var len = this.val.length
    var maxLen = this.rules.maxLength
    //console.log(len, maxLen)
    if (len > maxLen) {
      var _msg = m.maxLen.replace('n', maxLen)
      vLayer.call(this, _msg)
      return false
    }
  }
  r.validator_minLength = function () {
    var len = this.val.length
    var minLen = this.rules.minLength
    //console.log(len, minLen)
    if (len < minLen) {
      var _msg = m.minLen.replace('n', minLen)
      vLayer.call(this, _msg)
      return false
    }
  }
}(window.validator_rules, window.validator_msg))
