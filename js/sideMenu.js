define(['jquery', 'iscroll'], function($) {

    function openMask() {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = 'hidden';
    }

    function hideMask() {
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = 'auto';
    }

    function initDom(testJson) {
        if (testJson) {
            var tpls = '<section class="sm_warp"><ul class="sm_container">';
            tpls += '<li class="sm_li"><a><span class="sm_area">全部</span></a></li>';
            for (var i = 0, len = testJson.length; i < len; i++) {
                var tmpObj = testJson[i];
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

        $mask.on('click', function(e) {
            e.stopPropagation();
            $(this).hide();
            $wrap.hide();
            sideScroll.scrollTo(0, 0, 0);
            hideMask();
        });

        $(document.body).on('click', function(e) {
            initDom();
        })

        $wrap.on('click', '.sm_li', function(e) {
            e.stopPropagation();
            $mask.trigger('click');
        });

    }

    return {

        init: function() {
            var testJson = [{
                'areaName': '朝阳区',
                'num': 21
            }, {
                'areaName': '丰台区',
                'num': 1
            }, {
                'areaName': '海淀区',
                'num': 2
            }, {
                'areaName': '西城区',
                'num': 3
            }, {
                'areaName': '东城区',
                'num': 4
            }, {
                'areaName': '大兴区',
                'num': 5
            }, {
                'areaName': '通州区',
                'num': 6
            }, {
                'areaName': '怀柔区',
                'num': 6
            }, {
                'areaName': '昌平区',
                'num': 8
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '顺义区',
                'num': 11
            }, {
                'areaName': '门头沟区',
                'num': 12
            }, {
                'areaName': '门头沟区',
                'num': 12
            }, {
                'areaName': '门头沟区',
                'num': 12
            }, {
                'areaName': '崇文区',
                'num': 12
            }, {
                'areaName': '宣武区',
                'num': 32
            }, {
                'areaName': '延庆县',
                'num': 17
            }];
            var sideScroll = null;
            initDom(testJson);
            initIScroll();
            bindEvents();
        }
    }
});
