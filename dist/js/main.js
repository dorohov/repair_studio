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

        $('.reviews__list__inner').each(function() {
            $(this).slick({
                slidesToShow: 3,
                nextArrow: $(this).closest('.reviews__inner').find('button.is--next'),
                prevArrow: $(this).closest('.reviews__inner').find('button.is--prev'),
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 1500,
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

        $('.field_cancel').on('click', function() {
            var id = $(this).data('field')
            $('input[data-fieldname="' + id + '"]').val('')
        })

        $('form').parsley()

    })
})(jQuery);
var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(52.969492, 36.080201),
            zoom: 17,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "29"
                        },
                        {
                            "invert_lightness": true
                        },
                        {
                            "hue": "#008fff"
                        },
                        {
                            "saturation": "-73"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "saturation": "-72"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "32"
                        },
                        {
                            "weight": "0.42"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": "-53"
                        },
                        {
                            "saturation": "-66"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "-86"
                        },
                        {
                            "gamma": "1.13"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "hue": "#006dff"
                        },
                        {
                            "lightness": "4"
                        },
                        {
                            "gamma": "1.44"
                        },
                        {
                            "saturation": "-67"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "lightness": "5"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "weight": "0.84"
                        },
                        {
                            "gamma": "0.5"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "weight": "0.79"
                        },
                        {
                            "gamma": "0.5"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "lightness": "-78"
                        },
                        {
                            "saturation": "-91"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": "-69"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "lightness": "5"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "lightness": "10"
                        },
                        {
                            "gamma": "1"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "lightness": "10"
                        },
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": "-35"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-97"
                        },
                        {
                            "lightness": "-14"
                        }
                    ]
                }
            ]
          });
          var icon = 'http://frontend.dorohovdesign.ru/repair_studio/img/marker.png';

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(52.969492, 36.080201),
                icon: icon,
                map: map
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImNhcm91c2Vscy5qcyIsImZvcm0uanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJwcmljZS5qcyIsInNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25FbGVtZW50cyA9ICQoJy5hbmltJyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCQodGhpcykuZGF0YSgnYW5pbWF0aW9uRGVsYXknKSlcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJCh0aGlzKS5kYXRhKCdhbmltYXRpb25OYW1lJykpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCQodGhpcykuZGF0YSgnYW5pbWF0aW9uTmFtZScpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uKClcclxuICAgICAgICBcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5jYXJvdXNlbF9fYmlnX19pdGVtc19fd3JhcCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJvdXNlbF9fYmlnJykuZmluZCgnYnV0dG9uLmlzLS1uZXh0JyksXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICQodGhpcykuY2xvc2VzdCgnLmNhcm91c2VsX19iaWcnKS5maW5kKCdidXR0b24uaXMtLXByZXYnKSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY2Fyb3VzZWxfX3NtYWxsX19pdGVtc19fd3JhcCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJvdXNlbF9fc21hbGwnKS5maW5kKCdidXR0b24uaXMtLW5leHQnKSxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJCh0aGlzKS5jbG9zZXN0KCcuY2Fyb3VzZWxfX3NtYWxsJykuZmluZCgnYnV0dG9uLmlzLS1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLnJldmlld3NfX2xpc3RfX2lubmVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICQodGhpcykuY2xvc2VzdCgnLnJldmlld3NfX2lubmVyJykuZmluZCgnYnV0dG9uLmlzLS1uZXh0JyksXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICQodGhpcykuY2xvc2VzdCgnLnJldmlld3NfX2lubmVyJykuZmluZCgnYnV0dG9uLmlzLS1wcmV2JyksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuZmllbGRfY2FuY2VsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnZmllbGQnKVxyXG4gICAgICAgICAgICAkKCdpbnB1dFtkYXRhLWZpZWxkbmFtZT1cIicgKyBpZCArICdcIl0nKS52YWwoJycpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwidmFyIG1hcDtcclxuICAgICAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjk2OTQ5MiwgMzYuMDgwMjAxKSxcclxuICAgICAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCIyOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW52ZXJ0X2xpZ2h0bmVzc1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHVlXCI6IFwiIzAwOGZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiBcIi03M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiLTcyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcIjAuNDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIi01M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiBcIi02NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItODZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbW1hXCI6IFwiMS4xM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHVlXCI6IFwiIzAwNmRmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtbWFcIjogXCIxLjQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiLTY3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiMC44NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtbWFcIjogXCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiMC43OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtbWFcIjogXCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItNzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogXCItOTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItNjlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtbWFcIjogXCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogXCItMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiLTk3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHZhciBpY29uID0gJ2h0dHA6Ly9mcm9udGVuZC5kb3JvaG92ZGVzaWduLnJ1L3JlcGFpcl9zdHVkaW8vaW1nL21hcmtlci5wbmcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTIuOTY5NDkyLCAzNi4wODAyMDEpLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU92ZXJsYXkodHlwZSkge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvdygpIHtcclxuICAgICAgICAgICAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tb3ZlcmxheScpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWRlKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLS1vdmVybGF5JylcclxuICAgICAgICAgICAgICAgICQoJyNtb2JpbGVNZW51QnRuJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1tb2JpbGUtb3BlbicpXHJcbiAgICAgICAgICAgICAgICAkKCcuY2F0YWxvZ19fYXNpZGUnKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlID09ICdzaG93Jykge1xyXG4gICAgICAgICAgICAgICAgc2hvdygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PSAnaGlkZScpIHtcclxuICAgICAgICAgICAgICAgIGhpZGUoKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlID09ICd0b2dnbGUnKSB7XHJcbiAgICAgICAgICAgICAgICBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ2lzLS1vdmVybGF5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlKClcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0QmdGb3JOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgfHwgJCgnLm5hdmJhcicpLmhhc0NsYXNzKCdpcy0tYmdfZGFyaycpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1iZycpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWJnJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TWFpbkhlaWdodCgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE1haW5IZWlnaHQoKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIFwibWluSGVpZ2h0XCI6IFwiY2FsYygxMDB2aCAtIFwiICsgaGVpZ2h0ICsgXCJweClcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TWFpbkhlaWdodCgpXHJcbiAgICAgICAgfSkgXHJcblxyXG4gICAgICAgICQoJyNtb2JpbGVNZW51QnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1tb2JpbGUtb3BlbicpXHJcblxyXG4gICAgICAgICAgICB0b2dnbGVPdmVybGF5KCd0b2dnbGUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXJfX3NlYXJjaF9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX3NlYXJjaCcpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX3NlYXJjaF9fZmllbGQgaW5wdXQnKS5mb2N1cygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyX19zZWFyY2gnKVxyXG5cclxuICAgICAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyX19zZWFyY2gnKS5oYXNDbGFzcygnaXMtLW9wZW4nKSAmJlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0cy5sZW5ndGggPD0gMFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcl9fc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVPdmVybGF5KCdoaWRlJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0QmdGb3JOYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEJnRm9yTmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZ19fbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5jYXRhbG9nX19hc2lkZScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgdG9nZ2xlT3ZlcmxheSgnc2hvdycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcuY2F0YWxvZ19fYXNpZGVfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5jYXRhbG9nX19hc2lkZScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgdG9nZ2xlT3ZlcmxheSgnaGlkZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKCkge1xyXG4gICAgICAgICAgICAkKCcucmVwYWlyLS1wcmljZV9fZHJvcGRvd25fX2NvbnRhaW5lcicpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLnJlcGFpci0tcHJpY2VfX2Ryb3Bkb3duX19jb250YWluZXInKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLnJlcGFpci0tcHJpY2VfX2Ryb3Bkb3duX19jb250YWluZXInKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlVGFiKCkge1xyXG4gICAgICAgICAgICAkKCcuX19wcmljZS10YWInKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93VGFiKGlkKSB7XHJcbiAgICAgICAgICAgIGhpZGVUYWIoKVxyXG4gICAgICAgICAgICAkKCcuX19wcmljZS10YWIjJyArIGlkKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLnJlcGFpci0tcHJpY2VfX2Ryb3Bkb3duX19jb250YWluZXIgdWwgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd1RhYigkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKVxyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5yZXBhaXItLXByaWNlX19kcm9wZG93bl9fbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcucmVwYWlyLS1wcmljZV9fZHJvcGRvd24nKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBoaWRlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9ICQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgICAgICAgaWRzID0gMSxcclxuICAgICAgICAgICAgbWFpblRpbWVyLFxyXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gMCxcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlciA9IDEsXHJcbiAgICAgICAgICAgIHNlY29uZFRpbWVyXHJcblxyXG4gICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50SWQgPSBpZHNcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkYXRhLWl0ZW1pZCcsIGlkcylcclxuICAgICAgICAgICAgaWRzKytcclxuXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuZGF0YSgnaXRlbWlkJykgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJy5zbGlkZXJfX2xpbmVzIHVsJykuYXBwZW5kKCc8bGk+PHNwYW4gZGF0YS1pdGVtaWQ9XCInICsgY3VycmVudElkICsgJ1wiPjxkaXY+PC9kaXYgc3R5bGU9XCJ3aWR0aDogMCU7XCI+PC9zcGFuPjwvbGk+JylcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U2xpZGUoaWQpIHtcclxuXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwXHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIgPSBpZFxyXG5cclxuICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbVtkYXRhLWl0ZW1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5zbGlkZXJfX2xpbmVzIHVsIGxpIHNwYW4gZGl2JykuYXR0cignc3R5bGUnLCAnd2lkdGg6IDAlJylcclxuICAgICAgICAgICAgLy8gJCgnLnNsaWRlcl9faXRlbVtkYXRhLWl0ZW1pZD1cIicgKyBpZCArICdcIl0nKS5maW5kKCcuYmFubmVyX19pbm5lcl9fcmlnaHQnKS5hZGRDbGFzcygnYW5pbWF0ZWQnKS5hZGRDbGFzcygnZmFkZUluVXAnKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5zbGlkZXJfX2xpbmVzIHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmZpbmQoJ3NwYW4nKVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudElkID0gdGFyZ2V0LmRhdGEoJ2l0ZW1pZCcpXHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Vjb25kVGltZXIpXHJcbiAgICAgICAgICAgICQoJy5zbGlkZXJfX2l0ZW1bZGF0YS1pdGVtaWQ9XCInICsgY3VycmVudFNsaWRlciArICdcIl0gLmJhbm5lcl9faW5uZXJfX3JpZ2h0IGltZycpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZShjdXJyZW50SWQpXHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19pdGVtIC5iYW5uZXJfX2lubmVyX19yaWdodCBpbWcnKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtYWluVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSsrO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyX19saW5lcyB1bCBsaSBzcGFuW2RhdGEtaXRlbWlkPVwiJyArIGN1cnJlbnRTbGlkZXIgKyAnXCJdIGRpdicpLmF0dHIoJ3N0eWxlJywgJ3dpZHRoOicgKyBwZXJjZW50YWdlICsgJyUnKVxyXG4gICAgICAgICAgICBpZihwZXJjZW50YWdlID49IDk1KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19pdGVtW2RhdGEtaXRlbWlkPVwiJyArIGN1cnJlbnRTbGlkZXIgKyAnXCJdIC5iYW5uZXJfX2lubmVyX19yaWdodCBpbWcnKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBlcmNlbnRhZ2UgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMFxyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9faXRlbVtkYXRhLWl0ZW1pZD1cIicgKyBjdXJyZW50U2xpZGVyICsgJ1wiXSAuYmFubmVyX19pbm5lcl9fcmlnaHQgaW1nJykuY3NzKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPCBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyKytcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyID0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGUoY3VycmVudFNsaWRlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMClcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
