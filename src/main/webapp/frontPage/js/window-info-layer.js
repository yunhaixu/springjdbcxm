(function(win, $) {
    $("#close-btn").click(function() {
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭   
    });
}(this, jQuery));