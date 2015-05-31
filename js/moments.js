var feed = new Instafeed({
    get: 'tagged',
    tagName: 'apurvachetan2015',
    clientId: 'fdcb626fc3294270b882a3ff7f1a4bb2',
    sortBy: 'most-recent',
    links: 'false',
    template: '<div id="{{id}}" class="view"><img src="{{image}}" /><span class="emo">{{likes}}</span></div>',
    resolution: 'standard_resolution',
    success: function(){
        $('.spinner').remove();
    },
    after: function() {
        $(".view").each(function(){
            var emoArr = ["grin","happy","laugh","saint","squint","tongue","wink","wink2"];
            var rN = getRandomizer( 0, 7 );
            var emoClass = "emo fontelico-emo-" + emoArr[rN];
            $(this).find(".emo").addClass(emoClass);
            $(this).click(function(){
                $(this).toggleClass('expand');
            });
        });
    }
});
feed.run();

function getRandomizer(bottom, top) {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}