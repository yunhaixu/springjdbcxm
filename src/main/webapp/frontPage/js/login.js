/*!
 * login
 * author: chenxuan
 */

(function(win, $) {
    var $login = $('#login-btn'),
        $register = $('#register');
    $login.click(function() {
        // 判断是否登录成功 这里不做判断
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭   
    });
    $register.click(function() {
        parent.location.href = "register.html";
    });
}(this, jQuery));
