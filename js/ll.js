function setAffix(selector) {
	var offsetArticle = $(selector).offset();
	
	$(selector).affix({
		offset:{top:offsetArticle.top-20}
	});	  
}

jQuery.fn.setHeroMargin = function() {
	var height = $(this).height(),
		parentHeight = $(this).parents(".front-hero,.hero").height(),
		margin = ((height - parentHeight) / 2) * -1;
		
	if (margin < 0) {
		$(this).css("margin-top",margin);
	}
}

$(document).ready(function() {
	if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		$(".hero-image").each(function() {
			$(this).setHeroMargin();
		});
	}

	$(window).resize(function() {
		$(".hero-image").each(function() {
			$(this).setHeroMargin();
		});
	});
});