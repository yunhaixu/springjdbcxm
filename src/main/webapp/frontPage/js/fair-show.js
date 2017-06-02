(function(win, $) {
    // 下拉框插件
    $("#departmentSelect").chosen({
        disable_search: true
    });
    // 日历插件
    $("#time").datetimepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        minView: 2,
        autoclose: true
    });
}(this, jQuery));
