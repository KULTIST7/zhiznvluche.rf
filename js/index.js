$(document).ready(function () {
    Fancybox.bind("[data-fancybox]");

    $('input[type=tel]').inputmask({
        mask: '+7 (*{1}99) 999-99-99',
        placeholder: "+7 (___) ___-__-__",
        definitions: {
            '*': {
                validator: "[0-6,9]"
            }
        }
    });

    $('#page-nav').onePageNav();

    let scrollTop = 0;
    window.addEventListener('scroll', function () {
        if (!$('body').hasClass('noscroll')) {
            scrollTop = window.scrollY;
        }
    });

    $('.header__burger-btn').on('click', function () {
        const burger = $('.burger');
        const body = $('body');
        
        burger.toggleClass('burger-opened');

        if (burger.hasClass('burger-opened')) {
            body.addClass('noscroll');
            body.css('top', `-${scrollTop}px`);
        } else {
            body.removeClass('noscroll');
            window.scroll(0, scrollTop);
        }
    });

    $('.burger__close, .burger__space').on('click', function () {
        $('.burger').removeClass('burger-opened');
        $('body').removeClass('noscroll');
        window.scroll(0, scrollTop);
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
            $('.up').addClass('up-invisible');
        }
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({
            scrollTop: 0
        }, 500, 'swing');
    });

    if ($('.advantages').length) {
        let advantagesSlider = new Swiper('.advantages__slider', {
            speed: 500,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            slidesPerView: 1.2,
            spaceBetween: 20,
            navigation: {
                prevEl: '.advantages .slider-prev',
                nextEl: '.advantages .slider-next'
            },
            pagination: {
                type: 'progressbar',
                el: '.advantages .slider-progressbar'
            },
            on: {
                init: function () {
                    $('.advantages .slider-numbers-current').text(this.activeIndex+1 < 10 ? `0${this.activeIndex+1}/` : `${this.activeIndex+1}/`);
                    $('.advantages .slider-numbers-all').text(this.slides.length < 10 ? `0${this.slides.length}`: this.slides.length);
                }
            },
            breakpoints: {
                993: {
                    slidesPerView: 3,
                    spaceBetween: 90
                },
                769: {
                    slidesPerView: 2.2
                }
            }
        });

        advantagesSlider.on('slideChange', function () {
            $('.advantages .slider-numbers-current').text(this.activeIndex+1 < 10 ? `0${this.activeIndex+1}/` : `${this.activeIndex+1}/`);
            $('.advantages .slider-numbers-all').text(this.slides.length < 10 ? `0${this.slides.length}`: this.slides.length);
        });
    }

    if ($('.layouts').length) {
        let layoutsSlider = new Swiper('.layouts__slider', {
            effect: 'fade',
            speed: 500,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            slidesPerView: 1,
            navigation: {
                prevEl: '.layouts .slider-prev',
                nextEl: '.layouts .slider-next'
            },
            on: {
                init: function () {
                    $('.layouts .slider-numbers-current').text(this.activeIndex+1 < 10 ? `0${this.activeIndex+1}/` : `${this.activeIndex+1}/`);
                    $('.layouts .slider-numbers-all').text(this.slides.length < 10 ? `0${this.slides.length}`: this.slides.length);
                }
            }
        });

        layoutsSlider.on('slideChange', function () {
            $('.layouts .slider-numbers-current').text(this.activeIndex+1 < 10 ? `0${this.activeIndex+1}/` : `${this.activeIndex+1}/`);
            $('.layouts .slider-numbers-all').text(this.slides.length < 10 ? `0${this.slides.length}`: this.slides.length);
        });
    }

    if ($('.photogallery').length) {
        let photogallerySlider = new Swiper('.photogallery__slider', {
            slidesPerView: 0.46,
            freeMode: true,
            pagination: {
                type: 'progressbar',
                el: '.photogallery .slider-progressbar'
            },
            breakpoints: {
                993: {
                    slidesPerView: 'auto'
                },
                769: {
                    slidesPerView: 0.93
                },
                577: {
                    slidesPerView: 0.7
                }
            }
        });

        let photogallerySlide = $('.photogallery__slide').packery({
            itemSelector: '.photogallery__item',
            gutter: 32
        });

        function layoutPackery() {
            var windowWidth = $(window).width();  

            if (windowWidth < 408) {
                photogallerySlide.packery('option', {
                    gutter: 20
                });
            } else if (windowWidth < 577) {
                photogallerySlide.packery('option', {
                    gutter: 26
                });
            } else if (windowWidth < 769) {
                photogallerySlide.packery('option', {
                    gutter: 26
                });
            } else if (windowWidth < 835) {
                photogallerySlide.packery('option', {
                    gutter: 21
                });
            } else if (windowWidth < 993) {
                photogallerySlide.packery('option', {
                    gutter: 26
                });
            } else if (windowWidth < 1011) {
                photogallerySlide.packery('option', {
                    gutter: 16
                });
            } else if (windowWidth < 1264) {
                photogallerySlide.packery('option', {
                    gutter: 21
                });
            } else if (windowWidth < 1567) {
                photogallerySlide.packery('option', {
                    gutter: 26
                });
            }
            
            photogallerySlide.packery();
        }

        layoutPackery();

        $(window).resize(function() {
          layoutPackery();
        });
    }
});