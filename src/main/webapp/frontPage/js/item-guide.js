(function(win, $) {
	// tab切换
    new TabView({
        dom: $(".con-tab"),
        activeCls: 'hd-cur',
        triggerEvent: 'click'
    })
    // 下拉框插件
    $("#situationSelect").chosen({
        disable_search: true
    }).change(function(event, opt) {
        console.log(opt.selected);
    });
}(this, jQuery));
