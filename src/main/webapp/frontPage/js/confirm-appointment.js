(function(win, $) {
    var $cancel = $('#cancel');
    $cancel.on('click', function() {
        layer.open({
            title: '温馨提示',
            type: 2,
            skin: 'layui-layer-rim',
            area: ['501px', '360px'],
            content: ['../govHall/cancel-appoint.html']
        });
    });
}(this, jQuery));