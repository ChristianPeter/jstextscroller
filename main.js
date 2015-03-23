// scroller plugin
;(function($, window, document, undefined) {
		$.fn.textroller = function (duration) {			
			var current = 0;
			var items = $(this).children();			
			
			function switcher(){
				if (current >= items.length) current = 0;
				var item = items.eq(current);
				item.fadeIn();
				items.not(item).hide();
				current ++;
			}
			
			switcher();
			setInterval(switcher, duration);
		};
	
	
})(jQuery, window, document);



jQuery(document).ready(function(){
	jQuery("#myroller").textroller(5000);
});
