(function(win, $) {
    $('.radio-label').click(function() {
    	$(this).addClass('radio-chk').siblings().removeClass('radio-chk');
    });
    
}(this, jQuery));