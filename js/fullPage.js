$(document).ready(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#fullpage').fullpage({
            sectionsColor: ['#2EBFEF', '', '', '#F4A5A8']
        });
    } else {
        $('#fullpage').fullpage({
            anchors: _anchors,
            sectionsColor: ['#2EBFEF', '', '', '#F4A5A8'],
            navigation: true,
            navigationPosition: 'right',
            responsive: 1024,
            easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fitToSection: true,
        });
    }
});