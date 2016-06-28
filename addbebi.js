$(document).ready(main);

var main = function() {
	$.ajax({
		async: true,
		url: 'bebi.txt',
		dataType: 'text',
		success: function (data) {
			$('p').append(data);
			console.log("success");
		}
	});
};