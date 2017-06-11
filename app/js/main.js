
 $(".slider-control").click(function(e){
 	e.preventDefault();

 	var Obj = $(this);
 	var imgNum = $(this).attr("data");

 	function changeImg(){
 		$(".slider-image").animate({"opacity": 0} ,function(){
 		$(this).attr("src","img/slide"+imgNum+".jpg");
    $(this).parent().attr("href","img/big-slide/big"+imgNum+".jpg");
 		$(".slider-control").each(function(){
 			if(this.classList.contains('control-active')) {
 				$(this).removeClass("control-active");
 			}
 		});
 		$(Obj).addClass("control-active");
 		$(this).animate({"opacity": 1});
 	});
 	}
 	changeImg();
 });

// $("#single_image").fancybox();

// $('.you-link').fancybox({
//         openEffect  : 'none',
//         closeEffect : 'none',
//         helpers : {
//             media : {}
//         }
//     });
    $("#you-link").fancybox({
    		'transitionIn'	: 'none',
    		'transitionOut'	: 'none'
    	});
