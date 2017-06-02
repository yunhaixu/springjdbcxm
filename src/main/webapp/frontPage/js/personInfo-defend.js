(function(win, $) {
    $(".tabview").each(function(index, el) {
        new TabView({
            dom: el,
            activeCls: 'current',
            triggerEvent: 'click'
        });
    });

}(this, jQuery));
