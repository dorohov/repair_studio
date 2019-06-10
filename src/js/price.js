(function($) {
    "use strict"
    $(function() {

        firstLoad()

        function showDropdown() {
            $('.repair--price__dropdown__container').addClass('is--active')
        }

        function hideDropdown() {
            $('.repair--price__dropdown__container').removeClass('is--active')
        }

        function toggleDropdown() {
            $('.repair--price__dropdown__container').toggleClass('is--active')
        }

        function hideTab() {
            $('.__price-tab').removeClass('is--active')
        }

        function showTab(id) {
            hideTab()
            var container = $('.__price-tab[data-target="' + id + '"]').addClass('is--active')
            $('.repair--price__dropdown__label').html(container.data('title'))
            getSt(id)
        }

        function firstLoad() {
            if($('.repair--price__dropdown__container ul li').length >= 1) {
                var firstHash = $('.repair--price__dropdown__container ul li')[0]
                var hash = $(firstHash).children('a')[0].hash
                showTab(hash)
            }
        }

        function getSt(id) {
            $('.repair--price__st').removeClass('is--active')
            $('.repair--price__st[data-target="' + id + '"]').addClass('is--active')
        }

        $('a.--repair-link').on('click', function(e) {
            e.preventDefault()
            var hash = e.currentTarget.hash
            showTab(hash)
            hideDropdown()
            if($(this).hasClass('is--carousel')) {
                $('html,body').animate({scrollTop: $('.repair--price#price').offset().top - $('.navbar').innerHeight()},'slow');
            }
        })

        // $('.repair--price__dropdown__container ul li').on('click', function() {
        //     showTab($(this).data('target'), $(this).children('span').html())
        //     hideDropdown()
        // })

        $('.repair--price__dropdown__label').on('click', function() {
            toggleDropdown()
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.repair--price__dropdown')
            if(targets.length <= 0) hideDropdown()
        })

    })
})(jQuery);