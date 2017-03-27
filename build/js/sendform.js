$(document).ready(function() {
	$('form[data-receivers]').submit(function(){
		var form = $(this);
		var text = form.serialize();

		var result = {};
		text.split('&').forEach(function(elem){
			var kv = elem.split('=');
			result[kv[0]] = kv[1];
		});

		result['header'] = form.data('header');

		result['receivers'] = form.data('receivers').split(/[, ]+/);

		
		// var tabs = form.find('*[data-tabs]');
		// if(tabs.length > 0){
		// 	result['choice'] = tabs.find('.active *[data-tab]').data('tab');
		// }
		console.log('result');
		console.log(result);
		$.ajax({
			type : 'POST',
			url : 'sendmail.php',
			data : 'data=' + JSON.stringify(result),
			success: function(resp){
				form[0].reset();
				console.log(resp);
				window.location = "http://in.investacademy.kiev.ua/thanks.php"
			},
			error: function(resp){
				console.log('err');
			}
		});

		return false;
	});
});