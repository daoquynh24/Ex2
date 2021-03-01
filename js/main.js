$(".icon-bar").click(function (e) { 
	e.preventDefault();
	var hasClass =  $(".sidebar").hasClass("hide");
	if (hasClass) {
		$('.sidebar').removeClass('hide');
		$('.overlay').addClass('show');
	}
	else{
		$('.sidebar').removeClass('show');
		$('.overlay').addClass('hide');
	}	
});

$(".icon-close").click(function (e) { 
	e.preventDefault();
	$('.overlay').removeClass('show');
	$('.sidebar').addClass('hide');
});

$(".sidebar-menu a").click(function(e){
    var parent=$(this).parent();
    if(parent.find(">ul").length){
        e.preventDefault();
		var hasClassActive = parent.find(".icon-show").hasClass("active");
		var hasClassHide = parent.find(">ul").hasClass("hide");
		if (hasClassActive && !hasClassHide) {
			parent.find(".icon-show").removeClass("active");
			parent.find(">ul").addClass("hide");
			parent.removeClass("expand");
		} else {
			parent.find(".icon-show").addClass("active");
			parent.find(">ul").removeClass("hide");
			parent.addClass("expand");
		}
    }
});