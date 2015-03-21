var container = document.querySelector('#container');

/*$.ajax({
//    url         : "https://api.instagram.com/v1/users/54879141/media/recent/?client_id=fdcb626fc3294270b882a3ff7f1a4bb2",
    url         : "https://api.instagram.com/v1/tags/apurvachetan/media/recent?client_id=fdcb626fc3294270b882a3ff7f1a4bb2",
    context     : document.body,
    dataType    : "jsonp",
    cache       : false
})
.done(function(response) {
    var stream = response.data;
    for(var d = 0; d < stream.length; d++) {
        var _stream = stream[d];
        var $item = $("<div/>", {"class":"item"});
        var $img = $("<img/>", {"src":_stream.images.thumbnail.url, "class":"thumbnail"});
        $item.append($img);
        $(this).find("#container").append($item);      
    }
}).always(function(){
    var $container = $('#container');
    // initialize Masonry after all images have loaded  
    $container.imagesLoaded( function() {
      $container.masonry({
          columnWidth: 150,
          itemSelector: '.item'
        });
    });
}); */

var urls = [
             'https://api.instagram.com/v1/tags/apurvachetan/media/recent?client_id=fdcb626fc3294270b882a3ff7f1a4bb2',
             'https://api.instagram.com/v1/tags/chetanapurva/media/recent?client_id=fdcb626fc3294270b882a3ff7f1a4bb2'
           ];

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