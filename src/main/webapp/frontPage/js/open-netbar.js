(function(win, $) {
    $("#material-prepared").click(function() {
          layer.open({
            type: 2,
            skin: 'layui-layer-border',
            closeBtn: 0,
            area: ['1000px', '635px'],
            title: false,
            content: 'material-prepared.html',
            scrollbar: false
        });
    });

  $("#steps-bd").on('click','.btn-l',function() {
          layer.open({
            type: 2,
            skin: 'layui-layer-border',
            closeBtn: 0,
            area: ['1000px', '535px'],
            title: false,
            content: 'online-handle.html',
            scrollbar: false
        });
    });

}(this, jQuery));
