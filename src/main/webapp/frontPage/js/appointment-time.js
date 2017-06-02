(function(win, $) {
    var url = '../../json/appointment-time.json',
        M = Mustache,
        tableTemp = $('#table-temp').html(),
        $traffic = $('#time-table'),
        html = [];

        Util.ajax({
            url: url,
            success: function(data) {
                html.push(M.render(tableTemp, data));
                $traffic.empty().prepend(html);
                var myData = data.timeSpanList;
                renderTd1(myData);
            }
        });
        
        //替换时间段
        function renderTd1(data){
            var timeSpan =[];
            for(var i=0;i<data.length;i++){
                timeSpan.push(data[i].timeSpan);
            }
            var $time_span = $('.time-span');
            $time_span.each(function(i){
                $(this).html(timeSpan[i]);
            })
        }

}(this, jQuery));
