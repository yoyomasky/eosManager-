// 模拟数据
var transferData = [
  [{
    num: 1212,
    account: 'dasfasfdasfasfasfasfasffdasfasfasfasfasf111',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '失败',
    time: '2018-10-31'
  }],
  [{
    num: 2212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '失败',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '失败',
    time: '2018-10-31'
  }],
  [{
    num: 3212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '失败',
    time: '2018-10-31'
  }],
  [{
    num: 4212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '失败',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '成功',
    time: '2018-10-31'
  }, {
    num: 1212,
    account: 'dasfasfdasfasfasfasfasfasf',
    impAddr: 'adsfasfasfasdfsafds',
    expAddr: 'adsdfasfasfasdfsafds',
    hash: 'afasdfdasf2212fsasf',
    number: 12122,
    state: '失败',
    time: '2018-10-31'
  }]
]
// 数据渲染
function renderTransfer(data) {
  if (!data) {
    tBody.innerHTML = `
        <tr>
          <td colspan='${colspanLen}'>暂无数据</td>
        <tr>
      `
    return
  }
  var html = ''
  var maxLen = utils.maxLen
  for (var i = 0; i < data.length; i++) {
    html += `
      <tr>
        <td>${data[i].num}</td>
        <td title=${data[i].account}>${maxLen(data[i].account)}</td>
        <td title=${data[i].impAddr}>${maxLen(data[i].impAddr)}</td>
        <td title=${data[i].expAddr}>${maxLen(data[i].expAddr)}</td>
        <td title=${data[i].hash}>${maxLen(data[i].hash)}</td>
        <td>${data[i].number}</td>
        <td class="${data[i].state === '成功'? 'table-succeed' : 'table-fail'}">${data[i].state}</td>
        <td>${data[i].time}</td>
      </tr>
      `
  }
  tBody.innerHTML = html
}

var p_transfer = pagination({
  wrap: '#tranfer',
  total: transferData.length,
  size: 1,
  cb: function () {
    var currentPage = this.cur // 获取当前页数
    window.tBody = document.querySelector('.transferTable tbody')
    window.colspanLen = document.querySelectorAll('.transferTable th').length
    // 加载loading层
    var tLoading = utils.loading.create(tBody, colspanLen)
    // setTimeout 模拟ajax
    setTimeout(function () {
      // 获取数据调用renderTransfer方法,渲染数据
      var _data = transferData[currentPage - 1]
      // 删除loading层
      utils.loading.remove(tBody, tLoading)
      renderTransfer(_data)
    }, 400)
  }
})