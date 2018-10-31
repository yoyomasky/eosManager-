 window.addEventListener('DOMContentLoaded', function () {

   // 发行代币
   verify('.tokenPublish', function () {
     layer('验证成功')
   })
   //账户基本配置
   verify('.basicConfig', function () {
         //layer('基本配置成功');
       setaccconfig();
   })
 }, false)
