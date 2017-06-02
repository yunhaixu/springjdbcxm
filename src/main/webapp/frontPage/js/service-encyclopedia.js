/*!
 * 公共js
 * author: chenxuan
 */

(function(win, $) {
    var param = {
            //内部添加请求采数
        },
        url = "../../json/service-encycopedia.json",
        M = Mustache,
        template = $('#template').html();

    var downUp = function() {
        var $problem = $('#problem-answer'),
            $answer = $problem.find('.answer'),
            detailH;

        $answer.each(function(i, e) {
            var h = e.offsetHeight,
                str = '<i class="detail-slide down"></i>';
            if (h > 75) {
                e.innerHTML += str;
            }
        })

        $problem.on('click', '.down', function() {
            detailH = $(this).parent().height();
            $(this).removeClass('down').addClass('up').parent().animate({ height: '75px' });

        });
        $problem.on('click', '.up', function() {
            $(this).removeClass('up').addClass('down').parent().animate({ height: detailH + 'px' });

        });
    };

    var getData = function() {
        Util.ajax({
            url: url,
            data: param,
            success: function(data) {
                M.parse(template);
                var html = Util.clearHtml(M.render(template, { Info: data.Info }));
                $("#problem-answer").html(html);
                downUp();
            }
        })
    }
    getData();


}(this, jQuery));
