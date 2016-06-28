$(document).ready(function() {
	/*$.ajax({
		async: true,
		url: 'kurtv13.github.io/bebi.txt',
		dataType: 'text',
		success: function (data) {
			$('p').append(data);
			console.log("success");
		}
	});*/
	setInterval(function() {
		$('p').append("BEBI");
	}, 1000);
});