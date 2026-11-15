jQuery(document).ready(function(){
    $.fancybox.center = function() {};
$("#sign-in").fancybox({
    'width'           : 350,
    'height'          : 350,
    'padding'         : 0,
    'autoDimensions'  : false, // Forces the 350px width/height
    'autoScale'       : false,      
    'type'            : 'inline',
    'scrolling'       : 'no',    // Correct way to handle scrollbars
    'transitionIn'    : 'elastic',
    'transitionOut'   : 'elastic',
    'overlayColor'    : '#000000',
    'overlayOpacity'  : 0.8,
    'onComplete'      : function() {
        $("#fancybox-wrap").stop().css({
            'position' : 'fixed',
            'margin'   : 0
        });
        $("#fancybox-content").css({
            'height': '320px',
            'width': '350px',
			'border-radius': '0',
			'border': 'none'
        });
    }});
$('#side-chat').fancybox({
    'width'           : 300,
    'height'          : '100%',
    'autoScale'       : false,
    'padding'         : 0,
    'type'            : 'iframe',
    'overlayShow'     : false, 
    'hideOnOverlayClick': false,
    'transitionIn'    : 'none',
    'transitionOut'   : 'elastic',
    'centerOnScroll'  : false,
    'onComplete'      : function() {
        $("#fancybox-wrap").stop().css({
            'left'     : 'auto',
            'right'    : 0,
            'top'      : 'auto',
            'bottom'   : 0,
            'position' : 'fixed',
            'margin'   : 0
        });
        $("#fancybox-content").css({
            'height': '400px',
            'width': '100%',
			'border-radius': '0',
			'border': 'none'
        });
    }
});
/*$("#overlay").fancybox({
	'width'            : 500,
	'height'           : 355,
	 'autoDimensions'  : false, 
	 'autoScale'       : false, 
	 'type'            : 'ajax',
	 'transitionIn'    : 'elastic',
	 'transitionOut'   : 'elastic',
	 'overlayColor'    : '#CCCCCC',
	 'overlayOpacity'  : 0.5,
	 'scrolling'       : 'no'
});*/
$("#resume").fancybox({
    'width'           : 1000,
    'height'          : '98%',
    'autoScale'       : true,
    'autoDimensions'  : false,
    'padding'         : 0,
    'type'            : 'iframe',
    'transitionIn'    : 'elastic',
    'transitionOut'   : 'elastic',
    'overlayColor'    : '#000000',
    'overlayOpacity'  : 0.8,
    'onComplete'      : function() {
        $("#fancybox-wrap").stop().css({
            'margin'   : 0
        });
        $("#fancybox-content").css({
			'border-radius': '0',
			'border': 'none'
        });
    }
});
	$("#ChatRoom").fancybox({
	 'width'           : 400,
	 'height'          : 500,
	 /*'width'         : '75%',
	 'height'          : '75%', */
	 'autoScale'       : false,
	 'transitionIn'    : 'none',
	 'transitionOut'   : 'none',
	 'type'            : 'iframe',
	 'transitionIn'    : 'elastic',
	 'transitionOut'   : 'elastic',
	 'overlayColor'    : '#000',
	 'overlayOpacity'  : 0.9
	});

	$("#video").fancybox({
	 'width'           : 600,
	 'height'          : 480,
	 /*'width'         : '75%',
	 'height'          : '75%', */
	 'type'            : 'iframe',
	 'transitionIn'    : 'elastic',
	 'transitionOut'   : 'elastic',
	 'padding'         : 10,
	 'overlayColor'    : '#000',
	 'overlayOpacity'  : 0.9
	});
	     $('img#fb').tinyTips('Follow us on FACEBOOK');
	     $('img#tw').tinyTips('Follow us on TWITER');
	     $('img#gp').tinyTips('Follow us on GOOGLE PLUS');
	     $('img#cv').tinyTips('My Resume');
	     $('img#em').tinyTips('Contact us');
	     $('img#li').tinyTips('Follow us on LinkedIn');
	     $('img#nu').tinyTips('LOGIN');
	     $('img#ut').tinyTips('Follow us on YOUTUBE');
	     $('img#cr').tinyTips('Online Chat Room');
	     $('img#fl').tinyTips('Follow us on FLICKR');
});
