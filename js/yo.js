$(document).ready(function(){

    
    
    
    
    
$(".about").click( function(event){
	event.preventDefault();
    if ( $(this).hasClass("isDown") ) {
		$(".filmb").stop().animate({left:"0%"}, 500);	    					               $(".photob").stop().animate({left:"50%"}, 500);
        $(".content").stop().animate({width:"0%", left:"50%"}, 500);
        $('.aboutline').stop().animate({width:"0px"}, 30);  
        setTimeout( function(){ $(".content2").stop().animate({height:"0%"}, 0);}  , 500 );
        
                    
        $('.filmb').hover(function(){
        $('.film').stop().animate({width: '70%'}, 1000)
        $('.photo .photob').stop().animate({width: '30%', left: '70%'}, 1000)
    }, function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '50%'}, 1000)
  });

    $('.photob').hover(function(){
        $('.film').stop().animate({width: '30%'}, 1000)
        $('.photo .photob').stop().animate({width: '70%', left: '30%'}, 1000)
    }, function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '50%'}, 1000)
  });
        
        

    } else {
        $(".filmb").stop().animate({left:"-20%"}, 500);
        $(".photob").stop().animate({left:"60%"}, 500);
        $(".content").stop().animate({width:"40%", left:"30%"}, 500);
        $(".content2").stop().animate({height:"50%"}, 0);
        $('.aboutline').stop().animate({width:"80px"}, 50);
        
        $('.filmb').hover(function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '60%'}, 1000)
    }, function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '60%'}, 1000)
  });

    $('.photob').hover(function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '60%'}, 1000)
    }, function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '60%'}, 1000)
  });
        
        
    }
    $(this).toggleClass("isDown");
	return false;
});
    
    
    
    
    
    
    
    
    
    
    
            
        $('.filmb').hover(function(){
        $('.film').stop().animate({width: '70%'}, 1000)
        $('.photo .photob').stop().animate({width: '30%', left: '70%'}, 1000)
        $('.filmline').stop().animate({width:"150px"}, 50);
    }, function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '50%'}, 1000)
        $('.filmline').stop().animate({width:"0px"}, 50);
  });

    $('.photob').hover(function(){
        $('.film').stop().animate({width: '30%'}, 1000)
        $('.photo .photob').stop().animate({width: '70%', left: '30%'}, 1000)
        $('.photoline').stop().animate({width:"150px"}, 50);
    }, function(){
        $('.film').stop().animate({width: '50%'}, 1000)
        $('.photo .photob').stop().animate({width: '50%', left: '50%'}, 1000)
        $('.photoline').stop().animate({width:"0px"}, 50);
  });
    
    
    
    
    
    
    
    $(".filmb").click( function(){
        $(".home").stop().animate({left:"100%"}, 300);
        $(".about").stop().animate({left:"100%"}, 300);	
        $(".content").stop().animate({left:"100%"}, 300);
        $(".filmhome").stop().animate({left:"0%"}, 300);
        $(".filmback").stop().animate({left:"80%"}, 0);

        
        
});
    
        $(".filmback").click( function(){
        $(".home").stop().animate({left:"0%"}, 300);
        $(".about").stop().animate({left:"37.5%"}, 300);	
        $(".content").stop().animate({left:"50%", width:"0%"}, 300);
        $(".filmhome").stop().animate({left:"-100%"}, 300);
        $(".filmback").stop().animate({left:"-20%"}, 0);
            
            
            
        if($('.filmb').prop("disabled") != "disabled")
    {
        $('.filmb').prop("disabled", "disabled");
        
        setTimeout(function() {
            $(".filmb").removeAttr("disabled");
        }, 10000); // <-- your time (10 sec atm)
    }
        
});
    
    
    
    
    
    
    $(".photob").click( function(){
        $(".home").stop().animate({left:"-100%"}, 300);	
        $(".about").stop().animate({left:"-100%"}, 300);	
        $(".content").stop().animate({left:"-100%"}, 300);
        $(".main").stop().animate({left:"0%"}, 300);
        $("body").css("overflow-y", "visible");
        $("html").css("overflow-y", "visible");
        setTimeout( function(){ $(".photob").stop().animate({visibility: "hidden"}, 0);}  , 300 );
        
$('div.section').first();

$('a.display').on('click', function(e) {
    e.preventDefault();

      var t = $(this).text(),
      that = $(this);

    if (t === '1' && $('.current').next('div.section').length > 0) {
        var $next = $('.current').next('.section');
        var top = $next.offset().top + 100;
        
        $('.current').removeClass('current');
      
        $('body').animate({
          scrollTop: top     
        }, function () {
               $next.addClass('current');
        });
  } else if (t === '2' && $('.current').prev('div.section').length > 0) {
        var $prev = $('.current').prev('.section');
        var top = $prev.offset().top + 100;
        
        $('.current').removeClass('current');
      
        $('body').animate({
          scrollTop: top     
        }, function () {
               $prev.addClass('current');
        });
  } 
});
        
});
    
    $(".photoback").click( function(){
        $(".home").stop().animate({left:"0%"}, 300);
        $(".about").stop().animate({left:"37.5%"}, 300);	
        $(".content").stop().animate({left:"50%", width:"0%"}, 300);
        $(".main").stop().animate({left:"100%"}, 300);
        $("body").css("overflow-y", "hidden");
        $("html").css("overflow-y", "hidden");
        $(".photob").stop().animate({visibility: "visible"}, 0);
        
});
    
    
       $('.photoback').hover(  
       function(){  
          $(this).stop().fadeTo('slow', 1);  
       },  
       function(){  
          $(this).stop().fadeTo('slow', 0);  
});
    
        $('#display').hover(  
       function(){  
          $(this).stop().fadeTo('slow', 1);  
       },  
       function(){  
          $(this).stop().fadeTo('slow', 0);  
});
    
        $('#display1').hover(  
       function(){  
          $(this).stop().fadeTo('slow', 1);  
       },  
       function(){  
          $(this).stop().fadeTo('slow', 0);  
});
        
       $('.filmback').hover(  
       function(){  
          $(this).stop().fadeTo('slow', 1);  
       },  
       function(){  
          $(this).stop().fadeTo('slow', 0);  
});


});