$(document).ready(main);

var main = function() {
	$.ajax({
		async: false,
		url: 'bebi.txt',
		dataType: 'text',
		success: function (data) {
			$('body').append(data);
		}
	})
}