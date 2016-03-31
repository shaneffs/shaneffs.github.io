$(document).ready(function(){
	
	$('#cycle').jflickrfeed({
		limit: 18,
		qstrings: {
			id: '132707772@N07'
		},
		itemTemplate: '<li><img src="{{image_b}}" alt="{{title}}" /></li>'
	}, function(data) {
		$('#cycle div').hide();
		$('#cycle').cycle({
            fx:     'fade',
			timeout: 3000,
            
            
            
            
            
		});
	});
    
    

});