(function(win, $) {
   	var $buttons = $('#buttons');

   	//按钮点击选中事件
    $buttons.on('click', 'button', function() {
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
    });
    
}(this, jQuery));