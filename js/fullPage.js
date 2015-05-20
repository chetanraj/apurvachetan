$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'invite', 'location', 'others'],
        sectionsColor: ['#2EBFEF', '#1BBC9B', '', ''],
        navigation: true,
        navigationPosition: 'right',
        responsive: 1024,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });
});


// #2EBFEF, #00B6AD, #FFE5B8, #9767AD