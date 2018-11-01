window.addEventListener('DOMContentLoaded', function () {
    //----------------------mc----------------------------
    // 发行代币
    verify('.tokenPublish', function () {
        layer('验证成功')
    })
    //设置管理员
    verify('.setAuthManager', function () {
        setAuthManager();
    })
    //----------------------yl------------------------------
    //账户基本配置
    verify('.basicConfig', function () {
        setaccconfig();
    })
    //代币基本配置
    verify('.setconfig', function () {
        setconfig();
    })
    //更换代币拥有者
    verify('.setissuer', function () {
        setissuer();
    })
    //同意更换代币拥有者
    verify('.acceptissuer', function () {
        acceptissuer();
    })
    //授权
    verify('.setapprove', function () {
        setapprove();
    })
    //使用授权
    verify('.transferfrom', function () {
        transferfrom();
    })
    //按时间锁仓
    verify('.setlocktime', function () {
        setlocktime();
    })
    //按比例锁仓
    verify('.setlockrate', function () {
        setlockrate();
    })
}, false)