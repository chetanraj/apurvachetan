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
});