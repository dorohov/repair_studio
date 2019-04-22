(function($) {
    "use strict"
    $(function() {

        $('.carousel__big__items__wrap').each(function() {
            $(this).slick({
                slidesToShow: 3,
                nextArrow: $(this).closest('.carousel__big').find('button.is--next'),
                prevArrow: $(this).closest('.carousel__big').find('button.is--prev'),
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            autoplay: true,
                        }
                    }
                ]
            })
        })

        $('.carousel__small__items__wrap').each(function() {
            $(this).slick({
                slidesToShow: 6,
                nextArrow: $(this).closest('.carousel__small').find('button.is--next'),
                prevArrow: $(this).closest('.carousel__small').find('button.is--prev'),
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            autoplay: true,
                        }
                    }
                ]
            })
        })

    })
})(jQuery);