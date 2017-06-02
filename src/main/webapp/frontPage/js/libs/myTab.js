(function(win, $) {
    // 定义默认参数
    var defaultSettings = {
        // 初始化选中的tab标签，默认为0
        activeIndex: 0,
        // tab标签的dom对象,必须
        hdDom: null,
        bdDom: null,
        // 触发事件，可以为click或者mouseover,默认为click
        event: 'click',
        // 选中状态类名，必须
        activeClass: null,
        // mouseover延迟时间
        delay: 300
    };

    // 定义全局变量并以此作为启动方法，传入的参数为用户启动时设置的参数
    win.TabView = function(opts) {
        // opts为用户设置的参数，此处将默认参数和用户设置参数合并并作为调用插件后的参数
        this.userSettings = $.extend({}, defaultSettings, opts);
        this._initTabView();
    };

    $.extend(TabView.prototype, {
        _initTabView: function() {
            var settings = this.userSettings;
            var hd = settings.hdDom,
                bd = settings.bdDom,
                index = settings.activeIndex,
                event = settings.event,
                className = settings.activeClass,
                delay = settings.delay;
            $.extend(this, {
                hd: hd,
                bd: bd,
                index: index,
                event: event,
                className: className,
                delay: delay
            });

            this.initView();
            this.eventLis();
        },
        initView: function() {
            var hd = this.hd,
                bd = this.bd;
            $(hd).eq(this.index).addClass(this.className);
            $(bd).css('display', 'none').eq(this.index).css('display', 'block');
        },
        activeTab: function(i) {
        	var hd = this.hd,
                bd = this.bd;
            $(hd).eq(i).addClass(this.className).siblings().removeClass(this.className);
            $(bd).css('display', 'none').eq(i).css('display', 'block');
        },
        eventLis: function() {
            var e = this.event,
                hd = this.hd,
                bd = this.bd,
                delay = this.delay,
                myThis = this;
            var overTimer;
            if (e === 'click') {
                $(hd).each(function(i){
                	$(hd).eq(i).click(function(e){
                		e.preventDefault(); //阻止默认行为
                		myThis.activeTab(i);
                	})
                })
            } else if (e === 'mouseover') {
                $(hd).each(function(i){
                	$(hd).eq(i).mouseover(function(){
                        clearTimeout(overTimer);
                        overTimer = setTimeout(function(){
                            myThis.activeTab(i);
                        },delay);
                	})
                });
            }
        }
    });
}(this, jQuery));
