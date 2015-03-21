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
            var _stream = stream[d];
            var $view = $("<div/>", {"class":"view"});
            var $img = $("<img/>", {"src":_stream.images.low_resolution.url, "class":"thumbnail"});            
            $view.append($img);            
        
            $(this).find("#grid").append($view);      
        }
    });
});