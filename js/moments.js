var container = document.querySelector('#container');

var urls = ['https://api.instagram.com/v1/tags/apurvachetan2015/media/recent?client_id=fdcb626fc3294270b882a3ff7f1a4bb2'];

$.each(urls, function(i,u){ 
    $.ajax(u, { 
        type: 'GET',
        context     : document.body,
        dataType    : "jsonp",
        cache       : false 
    }).done(function(response) {
        var stream = response.data;
        for(var d = 0; d < stream.length; d++) {
            var emoArr = ["grin","happy","laugh","saint","squint","tongue","wink","wink2"];

            var rN = getRandomizer( 0, 8 );
            var emoClass = "emo fontelico-emo-" + emoArr[d] ;
            var $span = $("<span/>", {"class": emoClass})

            var _stream = stream[d];
            var $view = null;
            if(!$(".view").eq(d).length) {
                $view = $("<div/>", {"class":"view", "id":d});
                $(this).find("#grid").append($view);
            }
            
            var $img = $("<img/>", {"src":_stream.images.low_resolution.url, "class":"thumbnail"});               
            $(".view[id="+d+"]").append($img).append($span);
        }
    });
});

function getRandomizer(bottom, top) {
    return function() {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    }
}