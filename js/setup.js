$(document).ready(function(){
	
	$('#cycle').jflickrfeed({
		limit: 15,
		qstrings: {
			id: '132707772@N07'
		},
		itemTemplate: '<li><img src="{{image}}" alt="{{title}}" /><div>{{title}}</div></li>'
	}, function(data) {
		$('#cycle div').hide();
		$('#cycle').cycle({
            fx:     'scrollDown',
			timeout: 3000,
		});
	});
	
});