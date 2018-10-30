(function () {
  // 创建、发行代币
  utils.tabMenu('.tokenMenuWrap', '.tokenContentWrap')
  // 转账、批量转账
  utils.tabMenu('.transferMenuWrap', '.transferContentWrap')
  // 账户基本配置、代币基本配置
  utils.tabMenu('.configMenuWrap', '.configContentWrap')
  // 更换代币拥有者
  utils.tabMenu('.ownerMenuWrap', '.ownerContentWrap')
  // 授权
  utils.tabMenu('.accreditMenuWrap', '.accreditContentWrap')
  // 锁仓
  utils.tabMenu('.clockMenuWrap', '.clockContentWrap')
  // 售出
  utils.tabMenu('.saleMenuWrap', '.saleContentWrap')
  // 供应商订单
  utils.tabMenu('.supplierMenuWrap', '.supplierContentWrap')
}())
