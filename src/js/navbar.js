(function($) {
    "use strict"
    $(function() {

        function toggleOverlay(type) {
            if(type == 'show') {
                $('#overlay').addClass('is--active')
                $('body').addClass('is--overlay')
            }
            else if (type == 'hide') {
                $('#overlay').removeClass('is--active')
                $('body').removeClass('is--overlay')
                $('#mobileMenuBtn').removeClass('is--active')
                $('#overlay').removeClass('is--active')
                $('.navbar').removeClass('is--mobile-open')
                $('.catalog__aside').removeClass('is--active')
            }
        }

        function setBgForNavbar() {
            if($(document).scrollTop() > $('.navbar').innerHeight() || $('.navbar').hasClass('is--bg_dark')) {
                $('.navbar').addClass('is--bg')
            }else {
                $('.navbar').removeClass('is--bg')
            }
        }

        $('#mobileMenuBtn').on('click', function() {
            $(this).toggleClass('is--active')
            toggleOverlay('show')
            $('.navbar').toggleClass('is--mobile-open')
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