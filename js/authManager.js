function setAuthManager(){
    var acc=$(".setAuthAccInp").val();
    var accArr=new Array();
    var user_acc='owner1111121';
    if(acc.indexOf(',')>0){
        accArr=acc.split(",");
    }else{
        accArr[0]=acc;
    }
    console.log(accArr);
    var actionName='transfer';
    var authorization={actor:user_acc,permission: 'active'}
    var contractName=Contract_Name;
    var data={
        _accounts: accArr,
        _success:true
    }
    layer.prompt({title: '请输入账户私钥', formType: 1},function(val, index){
        Eos_transaction(contractName,actionName,authorization,data,val);
    });
}