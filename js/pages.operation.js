var transferData = [
  [{
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
var renderTransfer = (function () {
  var tBody = document.querySelector('.transferTable tbody')
  return function renderTransfer(data, size) {
    tBody.innerHTMl = ''
    var html = ''
    for (var i = 0; i < size; i++) {
      html += `
      <tr>
        <td>${data[i].num}</td>
        <td>${data[i].account}</td>
        <td>${data[i].impAddr}</td>
        <td>${data[i].expAddr}</td>
        <td>${data[i].hash}</td>
        <td>${data[i].number}</td>
        <td class="${data[i].state === '成功'? 'table-succeed' : 'table-fail'}">${data[i].state}</td>
        <td>${data[i].time}</td>
      </tr>
      `
    }
    tBody.innerHTML = html
  }
}())

var p_transfer = pagination({
  wrap: '#tranfer',
  total: transferData.length,
  size: 1,
  cb: function () {
    var _data = transferData[this.cur - 1]
    renderTransfer(_data, _data.length)
  }
})