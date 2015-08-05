define(['zepto', 'touch', 'iscroll'], function() {

    window.$ = Zepto;

    function openMask() {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = 'hidden';
    }

    function hideMask() {
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = 'auto';
    }

    function ajaxForData() {
        $.ajax({
            url: '/mock/test.json',
            data: {},
            type: 'GET',
            dataType: 'json',
            async: false,
            success: function(jsonData) {
                initOrshowDom(jsonData);
            }
        });
    }

    function initOrshowDom(jsonData) {
        if (jsonData) {
            var tpls = '<section class="sm_warp"><ul class="sm_container">';
            tpls += '<li class="sm_li"><a><span class="sm_area">全部</span></a></li>';
            for (var i = 0, len = jsonData.length; i < len; i++) {
                var tmpObj = jsonData[i];
                tpls += '<li class="sm_li"><a><span class="sm_area">' + tmpObj.areaName + '</span><span class="sm_nums">(&nbsp;' + tmpObj.num + '家&nbsp;)</span></a></li>';
            }
            tpls += '</ul></section>';
            $(document.body).append(tpls);

            var mask_tpl = '<section class="sm_mask"></section>';
            $(document.body).append(mask_tpl);
            $('.sm_mask').width($(document).width());
            $('.sm_mask').height($(document).height());
        } else {
            $('.sm_warp,.sm_mask').show();
        }
        openMask();
        $('.sm_warp').css('top', $(window).scrollTop());
    }

    function initIScroll() {
        sideScroll = new IScroll('.sm_warp', {
            scrollX: false,
            scrollY: true,
            bounceTime: 400,
            click: true
            // eventPassthrough: true,
            // preventDefault: false
        });
    }

    function bindEvents() {
        var $mask = $('.sm_mask'),
            $wrap = $('.sm_warp');

        $mask.on('tap', function(e) {
            e.stopPropagation();
            $(this).hide();
            $wrap.hide();
            sideScroll.scrollTo(0, 0, 0);
            hideMask();
        });

        $wrap.on('tap', '.sm_li', function(e) {
            e.stopPropagation();
            $mask.trigger('tap');
        });
    }

    return {

        init: function() {
            var sideScroll = null;
            if ($('.sm_warp').length == 0) {
                ajaxForData();
                initIScroll();
            } else {
                initOrshowDom();
            }
            bindEvents();
        }
    }
});
