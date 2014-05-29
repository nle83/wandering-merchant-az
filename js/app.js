$(document).ready(function() {
	$(".prod").on("click", function() {
		$(this).closest("li").find(".desc").slideToggle();
	});
})
