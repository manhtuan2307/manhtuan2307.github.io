jQuery(document).ready(function() {
    var screen_width = $(window).width();
    var height_body = $("body").height();

    if (height_body > 1200) {
        $(window).scroll(function() {
            var NextScroll = $(window).scrollTop();
            if (NextScroll > 110) {
                $(".header .menu-two").addClass("menu-fix");
            } else {
                $(".header .menu-two").removeClass("menu-fix");
            }
            if (screen_width < 800) {
                if (NextScroll > 85) {
                    $(".mobile .top").addClass("menu-fix");
                } else {
                    $(".mobile .top").removeClass("menu-fix");
                }
            }
        });
    }

    if (screen_width > 1100) {
        wow = new WOW({
            animateClass: 'animated',
            offset: 0
        });
        wow.init();
    }

    $(".owl-nav .owl-prev").html("");
    $(".owl-nav .owl-next").html("");

    $(".mobile .top .humbuger a").click(function() {
        $(".mobile .main-menu").toggleClass("is-active");
        $(".mobile .top").toggleClass("is-active");

        if ($(".mobile .top").hasClass("is-active")) {
            $(".mobile .top").removeClass("menu-fix");
            $(".mobile .top .humbuger h3").html("Đóng");
            $(".mobile .top .logo img").attr("src", "./assets/images/home/logo-white.png");
        } else {
            $(".mobile .top .humbuger h3").html("Menu");
            $(".mobile .top .logo img").attr("src", "./assets/images2/home/logo.png");
        }
        return false;
    });

    $(".main .banner .item .mobile").each(function(i) {
        var data_image_url = $(this).attr("data-image-url");
        if (screen_width < 800) {
            $(this).parent().css("background-image", "url('" + data_image_url + "')");
        }
    });

    // =======jquery cac buoc huong dan=======
    if (screen_width <= 425) {
        $('.list--step').addClass('owl-carousel');
        $('.list--step').addClass('owl-theme');
        $('.list--step li').addClass('item');
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            items: 1,
            autoHeight: true,
        })
    }
    // =====jquery xử lí menu màn mobile=====

    $(".tab-category").click(function() {
        $('.select-tab').stop().slideToggle();
        $('.tab-category').stop().toggleClass('active');
        return false;
    });

    $(".select-tab li a").click(function() {
        $('.select-tab').fadeOut(500);
    });

    $(".tab__item-mobile .select-tab li a").click(function() {
        var href = $(this).attr("href");
        console.log(href);
        window.location = href;
    }); 
    // =====end=====

    var tabItem__active2     = $('.tab_menu--child li');
    function tabItemsActive2__width(){
        var array = [];
        tabItem__active2.each(function(){
            array.push($(this).width());
        });

        return array;
    }

    var tabItemsActive2__width = tabItemsActive2__width();
    tabItem__active2.removeClass('is--active2');
    
    var tabItems__width = [];

    setTimeout(function(){
        var tabItem                 = $('.js-line-active').siblings('li');
        var tabItemAcitve           = $('.js-line-active').siblings('li.is--active');
        var tabItem__notActive      = $('.js-line-active').siblings('li').not('.is--active');
        var tabItemAcitve__width    = tabItemAcitve.width();
        var tabItemAcitve__lineLeft = 0;

        function tabItems__width(){
            var array = [];

            $('.tab_menu--child li').each(function(){
                array.push($(this).width());
            });

            return array;
        }
        tabItems__width = tabItems__width();

        if (tabItemAcitve.index() !== 1) {
            for (var i = 0; i < (tabItemAcitve.index() - 1); i++) {
                var _width = tabItem.eq(i).width();

                tabItemAcitve__lineLeft += _width + 44;
            }
        }

        $('.js-line-active').css({
            'left' : tabItemAcitve__lineLeft,
            'width': tabItemsActive2__width[tabItemAcitve.index() - 1]
        });

        tabItem__notActive.hover(function(event){
            var tabItem__notActive__lineLeft = 0;
            var _this_index                  = $(this).index();

            tabItem__notActive.removeClass('is--active2');
            tabItem__notActive.children('a').attr('style','');

            $(this).addClass('is--active2');
            var tabItem__notActive__width = $('.js-line-active').siblings('li.is--active2').width();

            for(var i = 0; i < (_this_index - 1); i++) {
                tabItem__notActive__lineLeft += tabItems__width[i] + 44;
            }

            $('.js-line-active').css({
                'left' : tabItem__notActive__lineLeft,
                'width': tabItemsActive2__width[_this_index - 1]
            });
        }, function(){
            tabItem__notActive.removeClass('is--active2');
            tabItem__notActive.children('a').attr('style','');// remove style inline

            $('.js-line-active').css({
                'left' : tabItemAcitve__lineLeft,
                'width': tabItemAcitve__width
            });
        });

        $('.tab_menu--child').addClass('is--visible');
    }, 800);


    $('body').find('#user-head--toggle').click(function(){
        $('#user-head').stop().fadeToggle();
    });

    $('.js-otp-wrap .input-otp').each(function(){
        var maxLength = $(this).attr('maxlength');

        if ( maxLength > 0 ) {
            $(this).keyup(function (event) {
                if ( !(event.which == 9) && !(event.which == 16) ) {
                    if (this.value.length == this.maxLength) {
                        $(this).next('input').focus();
                    }

                    if (event.which == 8) {
                        $(this).val(null);
                        if ($(this).index() == 0) {
                            return false;
                        }

                        $(this).siblings().val(null);
                        $(this).siblings('.input-otp').eq(0).focus();
                    }
    
                    if (event.which == 32) {
                        $(this).val(null);
                        $(this).next('input').focus();
                    } 
                }
            });
        }
    });
});


