$(document).ready(function() {
	Modernizr.Detectizr.detect({
	  detectDevice: true,
	  detectDeviceModel: true
	});

    if($('.desktop').length) {
        $('#fullpage').fullpage({
            anchors: ['home', 'invite', 'engaged', 'location'],
            sectionsColor: ['#2EBFEF', '', '', ''],
            navigation: true,
            navigationPosition: 'right',
            responsive: 1024,
            easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fitToSection: true,
        });
    } else {
        $('#fullpage').fullpage({
            sectionsColor: ['#2EBFEF', '', '', '']
        });
    }
    
    initialize();
});

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(12.7960, 77.4963),
      zoom: 8
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}


// #2EBFEF, #00B6AD, #FFE5B8, #9767AD