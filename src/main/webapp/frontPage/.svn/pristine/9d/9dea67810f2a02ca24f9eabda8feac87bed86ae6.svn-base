(function(win, $) {
    var url = '../../json/my-item.json',
        M = Mustache,
        acceptTemp = $('#accept-temp').html(),
        handleTemp = $('#handle-temp').html(),
        doneTemp = $('#done-temp').html(),
        backTemp = $('#back-temp').html(),
        draftTemp = $('#draft-temp').html(),
        realTemp,
        $traffic = $('#dothing-list'),
        html = [],
        $buttons = $('#buttons'),
        $itemCount = $('.item-count'),
        request = {
            "ValidateData": "",
            "para": {
                CategoryGuid: 0
            }
        },
        pageSize = 5,
        pageIndex = 0,
        type = "all";

    // 下拉框插件
    $("#departmentSelect").chosen({
        disable_search: true
    });

    //按钮点击选中事件
    $buttons.on('click', 'button', function() {
        var $this = $(this),
            tempType;
        $this.addClass('active').siblings().removeClass('active');
        var id = $this[0].id,
            value = $this.data('value');
        type = id;
        switch (id) {
            case "all":
                request.para.CategoryGuid = value;
                break;
            case "accept":
                request.para.CategoryGuid = value;
                break;
            case "handle":
                request.para.CategoryGuid = value;
                break;
            case "done":
                request.para.CategoryGuid = value;
                break;
            case "back":
                request.para.CategoryGuid = value;
                break;
            case "draft":
                request.para.CategoryGuid = value;
                break;
        }
        requestData(pageSize, pageIndex, id);
    });


    var judgeTemp = function(data) {
        // 循环判断选中模板
        $.each(data.notice, function(i, e) {
            if (e.type == 1) {
                realTemp = acceptTemp;
            } else if (e.type == 2) {
                realTemp = handleTemp;
            } else if (e.type == 3) {
                realTemp = backTemp;
            } else if (e.type == 4) {
                realTemp = doneTemp;
            } else {
                realTemp = draftTemp;
            }
            html.push(M.render(realTemp, { item: e }));
        });
    };

    // // 初始化请求第一页数据，每页五条
    requestData(pageSize, pageIndex, 'all');

    function requestData(pagesize, pageindex, type) {
        if (pagesize >= 0 && pageindex >= 0) {
            request.para.PageSize = pagesize;
            request.para.PageIndex = pageindex;
        } else {
            return false;
        }

        Util.ajax({
            url: url,
            data: JSON.stringify(request),
            success: function(data) {
                switch (type) {
                    case "all":
                        judgeTemp(data);
                        break;
                    case "accept":
                        html.push(M.render(acceptTemp, { item: data.notice }));
                        break;
                    case "handle":
                        html.push(M.render(handleTemp, { item: data.notice }));
                        break;
                    case "done":
                        html.push(M.render(doneTemp, { item: data.notice }));
                        break;
                    case "back":
                        html.push(M.render(backTemp, { item: data.notice }));
                        break;
                    case "draft":
                        html.push(M.render(draftTemp, { item: data.notice }));
                        break;
                }
                $traffic.empty().prepend(html.join(''));
                html = [];
                initPager(data, pagesize, pageindex);
                evaLayer();
            }
        });
    };

    function initPager(data, pagesize, pageindex) {
        var total = data.total;
        $itemCount.html(total);
        if ($("#pager").pagination()) {
            $("#pager").pagination('destroy');
        };
        $("#pager").pagination({
            total: total,
            pageElementSort: ['$page', '$size', '$info', '$jump'],
            pageSize: pagesize,
            pageIndex: pageindex,
            prevBtnText: '上页 <',
            nextBtnText: '下页 >',
            showInfo: true,
            showJump: true,
            noInfoText: "抱歉搜索到0条记录,请重新搜索!",
            infoFormat: pageindex + 1 + "/" + Math.ceil(total / pagesize)
        });
        $("#pager").on("pageClicked", function(event, pageData) { //分页按钮点击事件
            request.para.PageIndex = pageData.pageIndex;
            requestData(pageData.pageSize, pageData.pageIndex, type);
        }).on("jumpClicked", function(event, pageData) { //跳转按钮点击事件
            request.para.PageIndex = pageData.pageIndex;
            requestData(pageData.pageSize, pageData.pageIndex, type);
        });
    };

    // 弹窗
    function evaLayer() {
        var $evaluation_btn = $('.evaluation-btn');
        $evaluation_btn.click(function() {
            layer.open({
                title: '评价',
                type: 2,
                skin: 'layui-layer-rim',
                area: ['615px', '417px'],
                content: ['my-evaluation1.html']
            });
        });
    }


}(this, jQuery));
