(function($) {
    "use strict"
    $(function() {

        function toggleOverlay(type) {

            function show() {
                $('#overlay').addClass('is--active')
                $('body').addClass('is--overlay')

            }

            function hide() {
                $('#overlay').removeClass('is--active')
                $('body').removeClass('is--overlay')
                $('#mobileMenuBtn').removeClass('is--active')
                $('#overlay').removeClass('is--active')
                $('.navbar').removeClass('is--mobile-open')
                $('.catalog__aside').removeClass('is--active')

            }

            if(type == 'show') {
                show()
            }
            else if (type == 'hide') {
                hide()
            }else if(type == 'toggle') {
                if($('body').hasClass('is--overlay')) {
                    hide()
                }else {
                    show()
                }
            }
        }

        function setBgForNavbar() {
            if($(document).scrollTop() > $('.navbar').innerHeight() || $('.navbar').hasClass('is--bg_dark')) {
                $('.navbar').addClass('is--bg')
            }else {
                $('.navbar').removeClass('is--bg')
            }
        }

        setMainHeight()

        function setMainHeight() {
            var height = $('.footer').innerHeight()
            $('main').css({
                "minHeight": "calc(100vh - " + height + "px)"
            })
        }

        $(window).resize(function() {
            setMainHeight()
        }) 

        $('#mobileMenuBtn').on('click', function() {
            $(this).toggleClass('is--active')
            $('.navbar').addClass('is--mobile-open')

            toggleOverlay('toggle')
        })

        $('.navbar__search__btn').on('click', function() {
            $('.navbar__search').toggleClass('is--open')
            $('.navbar__search__field input').focus()
        })

        $(document).on('click', function(e) {

            var targets = $(e.target).closest('.navbar__search')

            if(
                $('.navbar__search').hasClass('is--open') &&
                targets.length <= 0
                
                ) {
                
                $('.navbar__search').removeClass('is--open')

            }
        })

        $('#overlay').click(function() {
            toggleOverlay('hide');
        })

        setBgForNavbar()

        $(document).scroll(function() {
            setBgForNavbar()
        })

        $('.catalog__mobile').on('click', function() {
            $('.catalog__aside').addClass('is--active')
            toggleOverlay('show')
        })
        $('.catalog__aside__close').on('click', function() {
            $('.catalog__aside').removeClass('is--active')
            toggleOverlay('hide')
        })

    })
})(jQuery);