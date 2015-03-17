$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'invite', 'location', 'others'],
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#E67E22'],
        navigation: true,
        navigationPosition: 'right',
        responsive: 1024,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });
});