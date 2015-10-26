$(document).ready(function(){
	
	$('#cycle').jflickrfeed({
		limit: 15,
		qstrings: {
			id: '132707772@N07'
		},
		itemTemplate: '<li><img src="{{image_b}}" alt="{{title}}" /></li>'
	}, function(data) {
		$('#cycle div').hide();
		$('#cycle').cycle({
            fx:     'scrollRight',
			timeout: 3000,
		});
	});
    
    	$('#cycle2').jflickrfeed({
		limit: 15,
		qstrings: {
			id: '132707772@N07'
		},
		itemTemplate: '<li><img src="{{image_b}}" alt="{{title}}" /></li>'
	}, function(data) {
		$('#cycle2 div').hide();
		$('#cycle2').cycle({
            fx:     'scrollLeft',
			timeout: 3000,
		});
	});
	
});