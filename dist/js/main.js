(function($) {
    "use strict"
    $(function() {

        function startAnimation() {
            var animationElements = $('.anim');
            animationElements.each(function() {
                $(this).addClass($(this).data('animationDelay'))

                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
            
                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(this).addClass('animated')
                    $(this).addClass($(this).data('animationName'))
                } else {
                    $(this).removeClass('animated')
                    $(this).removeClass($(this).data('animationName'))
                }

            })
        }

        startAnimation()
        
        $(window).on('resize scroll', function() {
            startAnimation()
        })

    })
})(jQuery);
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

        function showTab(id) {
            hideTab()
            $('.__price-tab#' + id).addClass('is--active')
            console.log(id)
        }

        $('.repair--price__dropdown__container ul li').on('click', function() {
            showTab($(this).data('target'))
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImNhcm91c2Vscy5qcyIsIm5hdmJhci5qcyIsInByaWNlLmpzIiwic2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbkVsZW1lbnRzID0gJCgnLmFuaW0nKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uRWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJCh0aGlzKS5kYXRhKCdhbmltYXRpb25EZWxheScpKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygkKHRoaXMpLmRhdGEoJ2FuaW1hdGlvbk5hbWUnKSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJCh0aGlzKS5kYXRhKCdhbmltYXRpb25OYW1lJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgIFxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplIHNjcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmNhcm91c2VsX19iaWdfX2l0ZW1zX193cmFwJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQodGhpcykuY2xvc2VzdCgnLmNhcm91c2VsX19iaWcnKS5maW5kKCdidXR0b24uaXMtLW5leHQnKSxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJCh0aGlzKS5jbG9zZXN0KCcuY2Fyb3VzZWxfX2JpZycpLmZpbmQoJ2J1dHRvbi5pcy0tcHJldicpLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5jYXJvdXNlbF9fc21hbGxfX2l0ZW1zX193cmFwJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQodGhpcykuY2xvc2VzdCgnLmNhcm91c2VsX19zbWFsbCcpLmZpbmQoJ2J1dHRvbi5pcy0tbmV4dCcpLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJvdXNlbF9fc21hbGwnKS5maW5kKCdidXR0b24uaXMtLXByZXYnKSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVPdmVybGF5KHR5cGUpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAnc2hvdycpICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09ICdoaWRlJykge1xyXG4gICAgICAgICAgICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAkKCcjbW9iaWxlTWVudUJ0bicpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICQoJyNvdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tbW9iaWxlLW9wZW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCZ0Zvck5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSB8fCAkKCcubmF2YmFyJykuaGFzQ2xhc3MoJ2lzLS1iZ19kYXJrJykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWJnJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tYmcnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjbW9iaWxlTWVudUJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS50b2dnbGVDbGFzcygnaXMtLW1vYmlsZS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19zZWFyY2hfX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19zZWFyY2gnKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19zZWFyY2hfX2ZpZWxkIGlucHV0JykuZm9jdXMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fc2VhcmNoJylcclxuXHJcbiAgICAgICAgICAgIGlmKFxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcl9fc2VhcmNoJykuaGFzQ2xhc3MoJ2lzLS1vcGVuJykgJiZcclxuICAgICAgICAgICAgICAgIHRhcmdldHMubGVuZ3RoIDw9IDBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXJfX3NlYXJjaCcpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI292ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlT3ZlcmxheSgnaGlkZScpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldEJnRm9yTmF2YmFyKClcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRCZ0Zvck5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKCkge1xyXG4gICAgICAgICAgICAkKCcucmVwYWlyLS1wcmljZV9fZHJvcGRvd25fX2NvbnRhaW5lcicpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLnJlcGFpci0tcHJpY2VfX2Ryb3Bkb3duX19jb250YWluZXInKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLnJlcGFpci0tcHJpY2VfX2Ryb3Bkb3duX19jb250YWluZXInKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlVGFiKCkge1xyXG4gICAgICAgICAgICAkKCcuX19wcmljZS10YWInKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93VGFiKGlkKSB7XHJcbiAgICAgICAgICAgIGhpZGVUYWIoKVxyXG4gICAgICAgICAgICAkKCcuX19wcmljZS10YWIjJyArIGlkKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLnJlcGFpci0tcHJpY2VfX2Ryb3Bkb3duX19jb250YWluZXIgdWwgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd1RhYigkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKVxyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5yZXBhaXItLXByaWNlX19kcm9wZG93bl9fbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcucmVwYWlyLS1wcmljZV9fZHJvcGRvd24nKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBoaWRlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9ICQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgICAgICAgaWRzID0gMSxcclxuICAgICAgICAgICAgbWFpblRpbWVyLFxyXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gMCxcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlciA9IDEsXHJcbiAgICAgICAgICAgIHNlY29uZFRpbWVyXHJcblxyXG4gICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50SWQgPSBpZHNcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLWl0ZW1pZCcsIGlkcylcclxuICAgICAgICAgICAgaWRzKytcclxuXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuZGF0YSgnaXRlbWlkJykgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJy5zbGlkZXJfX2xpbmVzIHVsJykuYXBwZW5kKCc8bGk+PHNwYW4gZGF0YS1pdGVtaWQ9XCInICsgY3VycmVudElkICsgJ1wiPjxkaXY+PC9kaXYgc3R5bGU9XCJ3aWR0aDogMCU7XCI+PC9zcGFuPjwvbGk+JylcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U2xpZGUoaWQpIHtcclxuXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwXHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIgPSBpZFxyXG5cclxuICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbVtkYXRhLWl0ZW1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5zbGlkZXJfX2xpbmVzIHVsIGxpIHNwYW4gZGl2JykuYXR0cignc3R5bGUnLCAnd2lkdGg6IDAlJylcclxuICAgICAgICAgICAgLy8gJCgnLnNsaWRlcl9faXRlbVtkYXRhLWl0ZW1pZD1cIicgKyBpZCArICdcIl0nKS5maW5kKCcuYmFubmVyX19pbm5lcl9fcmlnaHQnKS5hZGRDbGFzcygnYW5pbWF0ZWQnKS5hZGRDbGFzcygnZmFkZUluVXAnKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5zbGlkZXJfX2xpbmVzIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmZpbmQoJ3NwYW4nKVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudElkID0gdGFyZ2V0LmRhdGEoJ2l0ZW1pZCcpXHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Vjb25kVGltZXIpXHJcbiAgICAgICAgICAgICQoJy5zbGlkZXJfX2l0ZW1bZGF0YS1pdGVtaWQ9XCInICsgY3VycmVudFNsaWRlciArICdcIl0gLmJhbm5lcl9faW5uZXJfX3JpZ2h0IGltZycpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZShjdXJyZW50SWQpXHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19pdGVtIC5iYW5uZXJfX2lubmVyX19yaWdodCBpbWcnKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtYWluVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSsrO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyX19saW5lcyB1bCBsaSBzcGFuW2RhdGEtaXRlbWlkPVwiJyArIGN1cnJlbnRTbGlkZXIgKyAnXCJdIGRpdicpLmF0dHIoJ3N0eWxlJywgJ3dpZHRoOicgKyBwZXJjZW50YWdlICsgJyUnKVxyXG4gICAgICAgICAgICBpZihwZXJjZW50YWdlID49IDk1KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19pdGVtW2RhdGEtaXRlbWlkPVwiJyArIGN1cnJlbnRTbGlkZXIgKyAnXCJdIC5iYW5uZXJfX2lubmVyX19yaWdodCBpbWcnKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBlcmNlbnRhZ2UgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMFxyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbVtkYXRhLWl0ZW1pZD1cIicgKyBjdXJyZW50U2xpZGVyICsgJ1wiXSAuYmFubmVyX19pbm5lcl9fcmlnaHQgaW1nJykuY3NzKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPCBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyKytcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyID0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGUoY3VycmVudFNsaWRlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMClcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
