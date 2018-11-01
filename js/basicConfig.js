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
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}
//授权
function setapprove() {
    var actionName = 'setapprove';
    user_acc = 'liang1111111';
    var authorization = {actor: user_acc,permission: 'active'};
    var quantity = $('.setapprove .quantity').val().trim();
    var authorizer = $('.setapprove .authorizer').val().trim();
    var spender = $('.setapprove .spender').val().trim();
    var data = {"_quantity":quantity,"_authorizer":authorizer,"_spender":spender};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}
//使用授权
function transferfrom() {
    var actionName = 'transferfrom';
    user_acc = 'liang1111112';
    var authorization = {actor: user_acc,permission: 'active'};
    var quantity = $('.transferfrom .quantity').val().trim();
    var authorizer = $('.transferfrom .authorizer').val().trim();
    var spender = $('.transferfrom .spender').val().trim();
    var to = $('.transferfrom .to').val().trim();
    var data = {"_quantity":quantity,"_authorizer":authorizer,"_spender":spender,"_to":to};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}
//按时间锁仓
function setlocktime() {
    var actionName = 'setlocktime';
    user_acc = 'liang1111111';
    var authorization = {actor: user_acc,permission: 'active'};
    var executor = $('.setlocktime .executor').val().trim();
    var quantity = $('.setlocktime .quantity').val().trim();
    var owner = $('.setlocktime .owner').val().trim();
    var releaseTime = parseInt($('.setlocktime .releaseTime').val().trim());
    var rate = $('.setlocktime .rate').val().trim();
    var gapTime = parseInt($('.setlocktime .gapTime').val().trim());
    var data = {"_executor":executor,"_quantity":quantity,"_owner":owner,"_releaseTime":releaseTime,"_rate":rate,"_gapTime":gapTime};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}
//按比例锁仓
function setlockrate() {
    var actionName = 'setlockrate';
    user_acc = 'liang1111111';
    var authorization = {actor: user_acc,permission: 'active'};
    var executor = $('.setlockrate .executor').val().trim();
    var quantity = $('.setlockrate .quantity').val().trim();
    var owner = $('.setlockrate .owner').val().trim();
    var type = parseInt($('.setlockrate .type').val().trim());
    var time1 = parseInt($('.setlockrate .time1').val().trim());
    var releaseRate1 = parseInt($('.setlockrate .releaseRate1').val().trim());
    var time2 = parseInt($('.setlockrate .time2').val().trim());
    var releaseRate2 = parseInt($('.setlockrate .releaseRate2').val().trim());
    var time3 = parseInt($('.setlockrate .time3').val().trim());
    var releaseRate3 = parseInt($('.setlockrate .releaseRate3').val().trim());
    var time4 = parseInt($('.setlockrate .time4').val().trim());
    var releaseRate4 = parseInt($('.setlockrate .releaseRate4').val().trim());
    var data = {"_executor":executor,"_quantity":quantity,"_owner":owner,"_type":type,"_time1":time1,"_releaseRate1":releaseRate1,"_time2":time2,"_releaseRate2":releaseRate2,"_time3":time3,"_releaseRate3":releaseRate3,"_time4":time4,"_releaseRate4":releaseRate4};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        Eos_transaction(Contract_Name,actionName,authorization,data,val);
        layer.close(index);
    })
}