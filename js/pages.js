/**
 * MF 2018-10-31
 * 分页--多语言版本
 */
;
(function (win) {
  function Pages(args) {
    this.el = document.querySelector(args.el)
    this.cur = (args.cur || 1) * 1
    this.total = args.total * 1
    this.size = args.size * 1
    this.pageNum = args.pageNum || 5
    this.pageCount = Math.ceil(this.total / this.size)
    this.startPage = 1
    this.endPage = this.pageCount
    this.showAll = this.pageCount > this.pageNum
    this.showItems = []
    this.cb = args.cb || args.callback || function () {}
    this.doms = ''
    this.lang = {
      start: '首页',
      end: '尾页',
      prev: '上一页',
      next: '下一页'
    }
  }
  Pages.prototype = {
    constructor: Pages,
    init: function () {
      if (this.pageCount > 1) {
        this.create()
      }
      this.cb.call(this)
      return this
    },
    create: function () {
      var _this = this
      var pageWrap = document.createElement('div')
      pageWrap.className = 'mf-Pagination-wrap'
      pageWrap.innerHTML = this.curPages()
      pageWrap.addEventListener(
        'click',
        function (e) {
          var target = e.target
          if (target.tagName.toLowerCase() === 'button') {
            var page = parseInt(target.getAttribute('data-page'))
            if (page !== _this.cur) {
              _this.cur = page
              this.innerHTML = _this.curPages()
            }
            _this.cb.call(_this)
          }
        },
        false
      )
      this.el.appendChild(pageWrap)
      this.doms = pageWrap
    },
    changeLang: function (lang) {
      this.lang = lang
      this.doms.innerHTML = this.curPages()
    },
    curPages: function () {
      this.showItems = [
        'pageHome',
        'pagePrev',
        'pageMid',
        'pageNext',
        'pageLast'
      ]
      var temp = ''
      if (this.showAll) {
        for (var i = 0, item;
          (item = this.showItems[i++]);) {
          temp += this[item]()
        }
      } else {
        temp += this[this.showItems[2]]()
      }
      return temp
    },
    // 首页
    pageHome: function () {
      return this.cur > 2 ?
        '<button data-page="1">' + this.lang.start + '</button>' :
        ''
    },
    // 上一页
    pagePrev: function () {
      return this.cur === 1 ?
        '' :
        '<button  data-page="' +
        (this.cur - 1) +
        '">' +
        this.lang.prev +
        '</button>'
    },
    // 设置显示的页码
    setStartEnd: function () {
      if (this.pageCount > this.pageNum) {
        _showPage = (this.pageNum - 1) / 2
        var left = this.cur - _showPage,
          right = this.cur + _showPage
        if (left < 1) {
          left = 1
          right += _showPage - this.cur + 1
        }
        if (right > this.pageCount) {
          right = this.pageCount
          left -= _showPage - (this.pageCount - this.cur)
        }
        this.startPage = left
        this.endPage = right
      }
    },
    // 中间页
    pageMid: function () {
      var temp = ''
      this.setStartEnd()
      for (var i = this.startPage; i <= this.endPage; i++) {
        if (this.cur === i)
          temp +=
          '<button class="active" data-page="' + i + '">' + i + '</button>'
        else temp += '<button data-page="' + i + '">' + i + '</button>'
      }
      return temp
    },
    // 下一页
    pageNext: function () {
      return this.cur === this.pageCount ?
        '' :
        '<button  data-page="' +
        (this.cur + 1) +
        '">' +
        this.lang.next +
        '</button>'
    },
    // 尾页
    pageLast: function () {
      return this.pageCount - this.cur < 2 ?
        '' :
        '<button data-page="' +
        this.pageCount +
        '">' +
        this.lang.end +
        '</button>'
    }
  }
  win.pagination = function (args) {
    return new Pages(args).init()
  }
})(window)