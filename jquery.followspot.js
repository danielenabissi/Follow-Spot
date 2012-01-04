(function($){
    $.fn.followspot = function(parameters){
        var defaults = {
            width: 200,
            height: 200
        }, options = $.extend(defaults, parameters); 

		var $navWidth = $(window).width();
		var $navHeight = $(window).height();
			
		return this.each(function(){
			
			$overlay = $(this);
			drawOverlay($($overlay),options.width,options.height);

			$(".overlay_left").height(options.height);
			$(".overlay_right").height(options.height);
			$(".overlay_mid").height(options.height);
			$(".overlay_spot").width(options.width).height(options.height);

			$(window).resize(function() {
				drawOverlay($($overlay),options.width,options.height);		
			});
			
			$(this).mousemove(function(e) {
				
				var offset = $(this).offset();
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;
								
				if (x < options.width/2) x = options.width/2;
				if (x > $navWidth - options.width/2 ) x = $navWidth - options.width/2;
				if (y < options.height/2) y = options.height/2;
				if (y > $navHeight - options.height/2 ) y = $navHeight - options.height/2;

				var topHeight = y-(options.height/2);
				var bottomHeight = $navHeight - topHeight - options.height;
				var leftWidth = x-(options.width/2);
				var rightWidth = $navWidth - leftWidth - options.width;

				$(".overlay_top").height(topHeight);
				$(".overlay_bottom").height(bottomHeight);
				$(".overlay_left").width(leftWidth);
				$(".overlay_right").width(rightWidth);

			});
		});
		
		function drawOverlay(overlay,width,height) {
			
			$navWidth = $(window).width();
			$navHeight = $(window).height();

			var heightTopBottom = parseInt(($navHeight - height)/2,10);
			var widthLeftRight = parseInt(($navWidth - width)/2,10)
			
			$(".overlay_top").width($navWidth).height(heightTopBottom);
			$(".overlay_bottom").width($navWidth).height(heightTopBottom);
			$(".overlay_left").width(widthLeftRight);
			$(".overlay_right").width(widthLeftRight);
			
			if ($navWidth>((widthLeftRight*2)+width)) $(".overlay_right").width(widthLeftRight+1);
			if ($navHeight>((heightTopBottom*2)+height)) $(".overlay_bottom").height(heightTopBottom+1);

		}
    }
})(jQuery);
