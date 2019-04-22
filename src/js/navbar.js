(function($) {
    "use strict"
    $(function() {

        function toggleOverlay(type) {
            if(type == 'show') $('#overlay').addClass('is--active')
            else if (type == 'hide') {
                $('#overlay').removeClass('is--active')
                $('#mobileMenuBtn').removeClass('is--active')
                $('#overlay').removeClass('is--active')
                $('.navbar').removeClass('is--mobile-open')
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
            $('#overlay').toggleClass('is--active')
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

    })
})(jQuery);