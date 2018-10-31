// 验证信息提示语
window.validator_msg = {
  required: '不能为空',
  isNumeric: '必须是数字',
  max: '最大值为n',
  maxLen: '不大于为n个字符',
  minLen: '不小于为n个字符',
  pattern: {
    verifyAccount: '帐号名称应为a-z1-5.'
  },
}
//错误码提示语
var mMsg ={
    '1000000' : 'symbol is a required string',
    '1000001' : '账户不存在',
    '3040000' : '账户不存在',
    '3010011' : '检查资产格式是否正确',
    '3090004' : '签名人不正确',

    '3010001' : '账户名格式1-12位（a-z，1-5，“.” ) 且”.”不能在首尾',
    '3050001' : '账户已存在',
    '3090003' : '检查权限，签名等是否正确',
}
