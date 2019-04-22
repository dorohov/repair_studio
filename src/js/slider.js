(function($) {
    "use strict"
    $(function() {

        var items = $('.slider__item'),
            ids = 1,
            mainTimer,
            percentage = 0,
            currentSlider = 1,
            secondTimer

        items.each(function() {
            var currentId = ids
            $(this).attr('data-itemid', ids)
            ids++

            if($(this).data('itemid') == 1) {
                $(this).addClass('is--active')
            }

            $('.slider__lines ul').append('<li><span data-itemid="' + currentId + '"><div></div style="width: 0%;"></span></li>')

        })

        function setSlide(id) {

            percentage = 0
            currentSlider = id

            $('.slider__item').removeClass('is--active')
            $('.slider__item[data-itemid="' + id + '"]').addClass('is--active')
            $('.slider__lines ul li span div').attr('style', 'width: 0%')
            // $('.slider__item[data-itemid="' + id + '"]').find('.banner__inner__right').addClass('animated').addClass('fadeInUp')

        }

        $('.slider__lines ul li').on('click', function() {
            var target = $(this).find('span')
            var currentId = target.data('itemid')

            clearTimeout(secondTimer)
            $('.slider__item[data-itemid="' + currentSlider + '"] .banner__inner__right img').css('opacity', 0)
            setTimeout(function() {
                setSlide(currentId)
                $('.slider__item .banner__inner__right img').css('opacity', 1)
            }, 1000)

        })

        mainTimer = setInterval(function() {
            percentage++;
            $('.slider__lines ul li span[data-itemid="' + currentSlider + '"] div').attr('style', 'width:' + percentage + '%')
            if(percentage >= 95) {
                $('.slider__item[data-itemid="' + currentSlider + '"] .banner__inner__right img').css('opacity', 0)
            }
            if(percentage >= 100) {
                percentage = 0
                $('.slider__item[data-itemid="' + currentSlider + '"] .banner__inner__right img').css('opacity', 1)
                if(currentSlider < items.length) {
                    currentSlider++
                }else {
                    currentSlider = 1
                }
                setSlide(currentSlider)
            }
        }, 100)

    })
})(jQuery);