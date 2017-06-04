
 $(".slider-control").click(function(e){
 	e.preventDefault();

 	var Obj = $(this);
 	var imgNum = $(this).attr("data");

 	function changeImg(){
 		$(".slider-image").animate({"opacity": 0} ,function(){
 		$(this).attr("src","img/slide"+imgNum+".jpg");
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