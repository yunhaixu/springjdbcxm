(function(win, $) {
	// tab切换
    new TabView({
        dom: $(".con-r"),
        activeCls: 'cur',
        triggerEvent: 'click'
    })
}(this, jQuery));