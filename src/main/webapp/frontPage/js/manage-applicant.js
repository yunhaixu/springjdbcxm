(function(win, $) {
	// tab切换
    new TabView({
        dom: $(".applicant-tab"),
        activeCls: 'cur',
        triggerEvent: 'click'
    })
}(this, jQuery));