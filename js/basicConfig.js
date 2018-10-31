$(function () {
    
});
//账户基本配置
function setaccconfig() {
    var owner = $('.basicConfig .owner').val().trim().split(',');
    var isSelected = $('.basicConfig .isSelected').is(':checked') ? 1 : 0;
    var type = parseInt($('.basicConfig .type').val());
    user_acc = 'owner1111121';
    console.log(owner);
    console.log(isSelected);
    console.log(type);
    var contractName = Contract_Name;
    var actionName = 'setaccconfig';
    var authorization = {actor: user_acc,permission: 'active'};
    var data = {"_accounts":owner,"_success":isSelected,"_type":type};
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        console.log('得到了'+val);
        Eos_transaction(contractName,actionName,authorization,data,val);
        layer.close(index);
    })
}