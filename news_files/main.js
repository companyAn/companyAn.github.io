$(function () {



	$(".nav_li").not(":first-child").hover(

		function(){

			$(this).addClass("nav_li_hover");

			$(this).parent().parent().next(".subnavbg").show();			

	},

		function(){

			$(this).removeClass("nav_li_hover");

			$(this).parent().parent().next(".subnavbg").hide();	

		}

	);

	$(".x_r_nav").hover(

		function(){

			$(this).addClass("x_r_nav_hover");			

	},

		function(){

			$(this).removeClass("x_r_nav_hover");

		}

	);
	
});







