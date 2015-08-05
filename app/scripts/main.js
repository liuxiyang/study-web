requirejs.config({
    paths: {
        touch: 'touch',
        jquery: 'jquery.min',
        zepto: 'zepto.min',
        iscroll: 'iscroll-lite'
    }
});

requirejs(['jquery', 'ScrollTo', 'sideMenu'], function($, ScrollTo, sideMenu) {

    $('#btn').on('click', function() {
        sideMenu.init();
    })


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
