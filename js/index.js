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
        const advantagesSlider = new Swiper('.advantages__slider', {
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
        const layoutsSlider = new Swiper('.layouts__slider', {
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
        const photogallerySlider = new Swiper('.photogallery__slider', {
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

    if ($('.filter').length) {
        $('.number-slider').each(function () {
            noUiSlider.create(this, {
                start: [0, 100],
                connect: true,
                range: {
                    'min': 0,
                    'max': 100
                }
            });
        });

        $('.filter-number-input').each(function () {
            if (this.value.includes('.') || this.value.length > 6) {
                $(this).css('width', `${this.value.length-1}ch`);
            } else {
                $(this).css('width', `${this.value.length}ch`);
            }
            
        });

        $('.filter-open').on('click', function () {
            const filter = $('.filter');
            const body = $('body');
            
            filter.toggleClass('filter-opened');
    
            if (filter.hasClass('filter-opened')) {
                body.addClass('noscroll');
                body.css('top', `-${scrollTop}px`);
            } else {
                body.removeClass('noscroll');
                window.scroll(0, scrollTop);
            }
        });

        $('.filter-close').on('click', function () {
            $('.filter').removeClass('filter-opened');
            $('body').removeClass('noscroll');
            window.scroll(0, scrollTop);
        });
    }

    if ($('.apartment').length) {
        const apartmentThumbs = new Swiper('.apartment__thumbs .swiper', {
            slidesPerView: 3,
            spaceBetween: 17,
            breakpoints: {
                993: {
                    spaceBetween: 32
                }
            }
        });

        const apartmentSlider = new Swiper('.apartment__slider', {
            speed: 500,
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            navigation: {
                prevEl: '.apartment__gallery .slider-thumbs-prev',
                nextEl: '.apartment__gallery .slider-thumbs-next'
            },
            pagination: {
                type: 'progressbar',
                el: '.apartment__gallery .slider-progressbar'
            }, 
            thumbs: {
                swiper: apartmentThumbs
            }
        });
    }

    if ($('.location').length) {
        $('.location__list ul li:not(.location__main-item) a').on('click', function () {
            $('.location__list ul li a').removeClass('active');
            $(this).addClass('active');
        });

        $('.location__list__arrow').on('click', function () {
            if ($('.location__list').hasClass('collapsed')) {
                $('.location__list ul').slideDown(500, () => {
                    $('.location__list ul').css('height', 'auto');
                    $('.location__list').removeClass('collapsed');
                });
            } else {
                $('.location__list ul').animate({
                    height: "4rem"
                }, 500, () => {
                    $('.location__list').addClass('collapsed');
                });
            }
        });

        $('.location__list ul li a').on('click', function () {
            if (window.innerWidth < 993) {
                $('.location__list ul').animate({
                    height: "4rem"
                }, 500, () => {
                    $('.location__list').addClass('collapsed');
                });
            }
        });
    }

    if ($('.about-house').length) {
        const aboutHouseSlider = new Swiper('.about-house__slider', {
            speed: 500,
            navigation: {
                prevEl: '.about-house__slider__prev',
                nextEl: '.about-house__slider__next'
            },
            pagination: {
                type: 'progressbar',
                el: '.about-house .slider-progressbar'
            }
        });
    }

    // демонстрация (можнр удалить)
    if ($('.catalog').length) {
        $('.catalog__sort__item').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('down');            
            } else {
                $('.catalog__sort__item').removeClass('active down');
                $(this).addClass('active');
            }
        });
    }
});