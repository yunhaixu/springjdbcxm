(function(win, $) {
    var $login = $("#login-btn2");
    $login.on('click', function() {
        layer.open({
            title: '欢迎登陆',
            type: 2,
            skin: 'layui-layer-rim',
            area: ['501px', '407px'],
            content: ['../loginRegister/login.html']
        });
    });
}(this, jQuery));
