(function(win, $) {
    //按钮点击选中事件
    $('#btnCon').on('click', 'button', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
}(this, jQuery));