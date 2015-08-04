requirejs.config({
	paths : {
		jquery : 'jquery.min',
		iscroll : 'iscroll-lite'
	}
});

requirejs(['jquery','ScrollTo','sideMenu'],function($,ScrollTo,sideMenu){

	sideMenu.init();

	/*var scroll = new ScrollTo.ScrollTo({});

	$('#backTop').on('click',$.proxy(scroll.move,scroll));
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});
	checkPosition($(window).height());

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}*/
});