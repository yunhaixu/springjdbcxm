(function(win, $) {
    // radio选择
    radioChk('.radio-label');
    radioChk('.radio-Willing');

    function radioChk(radio) {
        $(radio).click(function() {
            $(this).addClass('radio-chk').siblings().removeClass('radio-chk');
        });
    }

    // 下拉列表
    chosenSelect("#departmentSelect");
    chosenSelect("#matterSelect");

    function chosenSelect(sender) {
        $(sender).chosen({
            disable_search: true
        });
    }

    // 提交成功弹窗
    succeedTipLayer();

    function succeedTipLayer() {
        var $ensure_btn = $('#ensure');
        $ensure_btn.click(function() {
            layer.open({
                title: ' ',
                type: 2,
                skin: 'layui-layer-rim',
                area: ['502px', '300px'],
                content: ['../index/succeed-tip.html']
            });
        })
    }

    // 文本框字数限制
    var $txt = $('#txt'),
        $wordCount = $('#wordCount');
    $txt.bind('input propertychange', function() {
        $wordCount.html($(this).val().length);
    });

    // 选择投诉时隐藏是否愿意公开
    $('#complaint').click(function() {
        $('#Willing').hide();
    });

    // 选择咨询时显示是否愿意公开
    $('#consulte').click(function() {
        $('#Willing').show();
    });
}(this, jQuery));
