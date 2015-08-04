define(['jquery'], function($) {
    function ScrollTo(opts) {
        this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
    }

    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800
    }

    ScrollTo.prototype.move = function(){
    	var opts = this.opts;
    	$('html,body').animate({
    		scrollTop:opts.dest
    	},opts.speed);
    }

    

    return {
    	ScrollTo : ScrollTo
    }
})
