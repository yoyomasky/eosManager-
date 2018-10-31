$(function () {
    
});
//账户基本配置
function setaccconfig() {
    var actionName = 'setaccconfig';
    user_acc = 'owner1111121';
    var authorization = {actor: user_acc,permission: 'active'};
    var owner = $('.basicConfig .owner').val().trim().split(',');
    var isSelected = $('.basicConfig .isSelected').is(':checked') ? 1 : 0;
    var type = parseInt($('.basicConfig .type').val());
    var data = {"_accounts":owner,"_success":isSelected,"_type":type};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        console.log('得到了'+val);
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}
//代币基本配置
function setconfig() {
    var actionName = 'setconfig';
    user_acc = 'owner1111121';
    var authorization = {actor: user_acc,permission: 'active'};
    var buyRate = parseInt($('.setconfig .buyRate').val().trim());
    var sellRate = parseInt($('.setconfig .sellRate').val().trim());
    var startTime = parseInt($('.setconfig .startTime').val().trim());
    var endTime = parseInt($('.setconfig .endTime').val().trim());
    var data = {"_buyRate":buyRate,"_sellRate":sellRate,"_startTime":startTime,"_endTime":endTime};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        console.log('得到了'+val);
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}
//更换代币拥有者
function setissuer() {
    var actionName = 'setissuer';
    user_acc = 'owner1111121';
    var authorization = {actor: user_acc,permission: 'active'};
    var owner = $('.setissuer .owner').val().trim();
    console.log(owner);
    var data = {"_issuer":owner};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        console.log('得到了'+val);
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}
//更换代币拥有者
function acceptissuer() {
    var actionName = 'acceptissuer';
    user_acc = 'liang1111111';
    var authorization = {actor: user_acc,permission: 'active'};
    var owner = $('.acceptissuer .owner').val().trim();
    console.log(owner);
    var data = {"_issuer":owner};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        console.log('得到了'+val);
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}