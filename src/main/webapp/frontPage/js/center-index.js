/*!
 * step
 * author: chenxuan
 */

(function(win, $) {
    // 日历插件
    var $date = $("#time-date");
    $date.datetimepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        minView: 2,
        minView: 4,
        autoclose: true //选择好自动关闭  
    }).on('changeDate', function(ev) {
       return false;
    });;
    // 高亮所有有待办的日期
    var lineHeight = function(array) {
        $.each(array, function(name, value) {
            var index = value - 1;
            $(".datetimepicker-days").find('tbody').find('.day:not(.old)').eq(index).addClass('item');
        });
    };
    // 发送ajax
    var sendAjax = function(date) {
        var dateItemURl = '../../json/date-item.json',
            para = {
                "ValidateData": "",
                "paras": {
                    " CurrentPageIndex ": "",
                    "PageSize": "",
                    "date": date
                }
            },
            M = Mustache,
            temp1 = $('#temp1').html(),
            temp2 = $('#temp2').html(),
            temp3 = $('#temp3').html(),
            realTemp,
            $traffic = $('#dateItem-ul'),
            html = [];

        Util.ajax({
            url: dateItemURl,
            data: JSON.stringify(para),
            success: function(data) {
                // 取到待办事项的day
                var dayArray = [];
                var tem1 = Util.clearHtml(temp1),
                    tem2 = Util.clearHtml(temp2),
                    tem3 = Util.clearHtml(temp3);
                // 循环判断选中模板
                $.each(data.notice, function(i, e) {
                    dayArray.push(e.day);
                    if (e.type == 1) {
                        realTemp = tem1;
                    } else if (e.type == 2) {
                        realTemp = tem2;
                    } else {
                        realTemp = tem3;
                    }
                    html.push(M.render(realTemp, e));
                });
                lineHeight(dayArray);
                $traffic.empty().prepend(html.join(''));
                html = [];
            }
        });
    };
    var nowDate = new Date(),
        nowYead = nowDate.getFullYear(),
        nowMonth = nowDate.getMonth() + 1,
        nowTime = nowYead + '-' + nowMonth;
    sendAjax(nowTime);
    //得到时间 2015-9
    var getRealDate = function(date, falg) {
        var year = parseInt(date.replace(/(\d{4}).+/, '$1')),
            month = date.replace(/(\d{4}).(.{1,2})./, '$2'),
            twelveMonth = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
            monthIndex = $.inArray(month, twelveMonth);
        if (falg) {
            switch (monthIndex) {
                case 11:
                    return (year + 1) + '-' + 1;
                    break;
                default:
                    return year + '-' + (monthIndex + 2);
                    break;
            }
        } else {
            switch (monthIndex) {
                case 0:
                    return (year - 1) + '-' + 12;
                    break;
                default:
                    return year + '-' + monthIndex;
                    break;
            }
        }
    };

    $(".datetimepicker-days").find('.prev').click(function() {
        var now = $('.datetimepicker-days .switch').html();
        sendAjax(getRealDate(now, false));
    });

    $(".datetimepicker-days").find('.next').click(function() {
        var now = $('.datetimepicker-days .switch').html();
        sendAjax(getRealDate(now, true));

    })



}(this, jQuery));
