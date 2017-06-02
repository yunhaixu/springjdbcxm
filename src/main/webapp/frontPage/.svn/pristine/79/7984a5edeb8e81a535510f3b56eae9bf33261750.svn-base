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
    var $delete_btn = $('.clear-btn');
    $delete_btn.click(function() {
        $('.imgs').empty();
        // 每次删除操作都判断是否为空
        imgIsNull();
    });

    // 还原
    var $restore = $('.restore-btn');
    $restore.click(function(){
        $('.checked').remove();
        // 每次删除操作都判断是否为空
        imgIsNull();
    });

    // 判断清空
    function imgIsNull(){
        var $check_all = $('.check-all'),
            $dom = $('.imgs');
        console.log($('.img-item').length)
        if($('.img-item').length===0){
            $check_all.removeClass('.check-all').addClass('hidden');
            $dom.addClass('is-empty');
        }else{
            $check_all.removeClass('hidden');
        }
    }

    // 右键菜单
    var menuData = [
        [{
            text: "还原",
            func: function() {
            	console.log('还原');
            }
        }, {
            text: "删除",
            func: function() {
            	$(this).remove();
                imgIsNull();
            }
        }]
    ];
    $img_item.each(function() {
        $(this).smartMenu(menuData);
    })
}(this, jQuery));
