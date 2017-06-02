/*!
 * 大厅分布
 * author: chenxuan
 */

(function(win, $) {
    var url = '../../json/hall1.json',
        M = Mustache,
        jsonData,
        $content = $("#content"),
        temp1 = $('#temp1').html(),
        temp2 = $('#temp2').html(),
        html = [];
    // 给所有窗口追加div放置brief displau none
    var appendBrief = function() {
        $content.find('li').each(function(i, e) {
            var dataNum = this.getAttribute('data-num'),
                nowData = jsonData[dataNum];
            if (nowData && nowData.brief) {
                $(this).append('<div class="briefTip" style="display:none">' + nowData.brief + '</div>');
            }
        });
        $content.find('.top').each(function(i, e) {
            var $this = $(this),
                $brief = $this.children('.briefTip'),
                h = $brief.height() * (-1) - 10;
            $brief.css("top", h + 'px');
        });
        // display block
        $content.find('.briefTip').show();
    };
    // addList
    var addList = function() {
        $content.on('mouseenter', 'ul>li', function(e) {
            var dataNum = this.getAttribute('data-num'),
                $this = $(this),
                len = $this.children('.hall-tip').length,
                $div = $this.closest("div"),
                nowData = jsonData[dataNum];
            if (!len) {
                if ($div.hasClass('bottom-area')) {
                    html.push(M.render(temp2, nowData));
                    $this.append(html);
                    var nowTipH = -($this.children('.hall-tip').height() + 70);
                    $this.children('.hall-tip').css('marginTop', nowTipH);
                    html = [];
                } else {
                    html.push(M.render(temp1, nowData));
                    $this.append(html);
                    html = [];
                }
            }
        })
    };

    Util.ajax({
        url: url,
        success: function(data) {
            jsonData = data;
            appendBrief();
            addList();
        }
    });


}(this, jQuery));
