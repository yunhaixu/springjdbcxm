(function(win, $) {

    new TabView({
        hdDom: '.hd-item',
        bdDom: '.bd-item',
        activeClass: 'hd-cur',
        event: 'click',
        activeIndex: 0
    });

    var $radio = $("#todo-radio");

    $radio.on('click', 'label', function() {
        var value = $('input:radio:checked').val();
        $('.case-metail').addClass('hidden').eq(value).removeClass('hidden');
        $('.case-process').addClass('hidden').eq(value).removeClass('hidden');
    })
    
    $('#markSure').click(function() {
        $('.hd-item').eq(2).trigger('click');
    });

    $('.slide-arrow').click(function() {
        $(this).parent().parent().toggleClass('open').end().next().slideToggle(300);
    });

    $('.slide-arrow2').click(function() {
        $(this).parent().parent().toggleClass('open').end().next().slideToggle(300);
    });

    var $process_item = $('.process-item');
    $process_item.eq($process_item.length-1).addClass('last-step');
}(this, jQuery));
