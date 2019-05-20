(function($) {
    "use strict"
    $(function() {

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

        function showTab(id, title) {
            hideTab()
            $('.__price-tab#' + id).addClass('is--active')
            $('.repair--price__dropdown__label').html(title)
        }

        $('.repair--price__dropdown__container ul li').on('click', function() {
            showTab($(this).data('target'), $(this).children('span').html())
            hideDropdown()
        })

        $('.repair--price__dropdown__label').on('click', function() {
            toggleDropdown()
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.repair--price__dropdown')
            if(targets.length <= 0) hideDropdown()
        })

    })
})(jQuery);