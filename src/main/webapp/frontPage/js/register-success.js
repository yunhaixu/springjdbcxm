/*!
 * 注册协议
 * author: chenxuan
 */

(function(win, $) {
    var $loginSpan = $('#loginSpan'),
        time;
    var loginClick = function() {
        layer.open({
            title: '欢迎登陆',
            type: 2,
            skin: 'layui-layer-rim',
            area: ['501px', '407px'],
            content: ['../loginRegister/login.html']
        });
    };
    $loginSpan.click(function() {
        loginClick();
        clearTimeout(time);
    });
    //3秒登录
    time = setTimeout(loginClick, 3000);

}(this, jQuery));
