$(document).ready(function () {
    $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });
});

$("button.magazine-logout").click(function () {
    $.get("logout", function (data) {
        if (data !== '') {
            var customUrl = '';
            var urlContent = window.location.href.split('/');
            for (var i = 0; i < urlContent.length - 1; i++) {
                customUrl += urlContent[i] + '/'
            }
            customUrl += data;
            window.location = customUrl;
        }
    });
});

$(document).ready(function() {
	$.get("getAccessLevel", function(data) {
		if (data !== '') {
			accessLevel = data;
		}
	}).done(function() {
		if (accessLevel === 'ADMIN') {
			$('li.user-subscribe-option').hide();
		} else {
			$('li.create-magazine-option').hide();
		}
	});
});