(function(win, $) {
    // 选中
    var $img_item = $('.img-item'),
        $check_all = $('.check-all');
    $img_item.click(function() {
        if ($(this).hasClass('checked')) {
            $check_all.removeClass('checked-all');
        };
        $(this).toggleClass('checked');
        var isAllChecked = true;
        $img_item.each(function(i) {
            isAllChecked = isAllChecked && ($img_item.eq(i).hasClass('checked'));
        })
        if (isAllChecked) {
            $check_all.addClass('checked-all');
        }
    });
    $check_all.click(function() {
        if ($(this).hasClass('checked-all')) {
            $img_item.removeClass('checked');
        } else {
            $img_item.addClass('checked');
        }
        $(this).toggleClass('checked-all');
    });

    // 删除
    var $delete_btn = $('.delete-btn');
    $delete_btn.click(function() {
        $('.checked').remove();
        // 每次删除操作都判断是否为空
        imgIsNull();
    });

    // 判断清空
    function imgIsNull(){
        var $trans_btn = $('.trans-folder'),
            $delete_btn = $('.delete-btn'),
            $download_btn = $('.download-btn'),
            $check_all = $('.checked-all'),
            $dom = $('.imgs');
        console.log($('.img-item').length)
        if($('.img-item').length===0){
            $trans_btn.addClass('hidden');
            $delete_btn.addClass('hidden');
            $download_btn.addClass('hidden');
            $check_all.removeClass('.checked-all').addClass('hidden');
            $dom.addClass('is-empty');
        }else{
            $trans_btn.removeClass('hidden');
            $delete_btn.removeClass('hidden');
            $download_btn.removeClass('hidden');
            $check_all.removeClass('hidden');
        }
    }

    // 右键菜单
    var menuData = [
        [{
            text: "下载",
            func: function() {
            	console.log('下载');
            }
        }, {
            text: "删除",
            func: function() {
            	$(this).remove();
                imgIsNull();
            }
        },{
            text: "移动到",
            func: function() {
            	console.log('移动');
            }
        }, {
            text: "重命名",
            func: function() {
                var $p = $(this).find('p'),
                    defaultTxt = $p.text();
            	$p.html(prompt('重命名',defaultTxt));
            }
        }]
    ];
    $img_item.each(function() {
        $(this).smartMenu(menuData);
    })
}(this, jQuery));
