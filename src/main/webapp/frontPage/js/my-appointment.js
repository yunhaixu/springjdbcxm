(function(win, $) {
    // 下拉框插件
    $("#departmentSelect").chosen({
        disable_search: true
    });

    //按钮点击选中事件
    $('#btnCon').on('click', 'button', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 弹窗
    function cancelAppointmentLayer() {
        var $cancel_btn = $('.appointment-cancel');
        $cancel_btn.click(function() {
            layer.open({
                title: '温馨提示',
                type: 2,
                skin: 'layui-layer-rim',
                area: ['501px', '360px'],
                content: ['../govHall/cancel-appoint.html']
            });
        })
    }
    cancelAppointmentLayer();
}(this, jQuery));
