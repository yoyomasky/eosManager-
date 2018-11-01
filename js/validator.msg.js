// 验证信息提示语
window.validator_msg = {
  required: '不能为空',
  isNumeric: '必须是数字',
  max: '最大值为n',
  maxLen: '不大于为n个字符',
  minLen: '不小于为n个字符',
  pattern: {
    verifyAccount: '账户应为12个字符(a-z1-5.)'
  },
}
//错误码提示语
var mMsg ={
    //资产
    '1000000' : 'symbol is a required string',
    '1000001' : 'Invalid asset string',
    '1000002' : '检查资产格式是否正确',
    //账户
    '3010001' : '账户名格式1-12位（a-z，1-5，“.” ) 且”.”不能在首尾',
    '3050001' : '账户已存在',
    //签名
    '3090003' : '检查权限，签名等是否正确',
    '3090004' : '签名人不正确',
}
