(function(win, $) {
    var $cancel = $('#cancel');
    $cancel.on('click', function() {
        layer.open({
            title: '温馨提示',
            type: 2,
            skin: 'layui-layer-rim',
            area: ['501px', '360px'],
            content: ['../govHall/cancel-apply.html']
        });
    });
     // 下拉框插件
    $("#situationSelect").chosen({
        disable_search: true
    }).change(function(event, opt) {
        console.log(opt.selected);
    });
    
    $('#step-body').on('click','.table-slide',function(){
        console.log(1)
        $(this).toggleClass('down').parent().next().slideToggle();
    });
}(this, jQuery));
