import './style.scss'
import './slick.css'
import './slick.min.js'

$(document).ready(function(){

    /* Slider Init */
    $('.slider__container').slick({
        autoplay: 5000,
        speed: 1000,
        fade: true,
        pauseOnHover: true,
        arrows: false,
        dots: true,
        dotsClass: 'slide__dots'
    });

    /* Pinned Header */
    var now_pos = 0,
        header_height = $('.header').height();
    $(document).scroll(function () {
        var position = $(this).scrollTop();
        if (now_pos < position ){
            if(position > header_height) {
                $('.header').addClass('header__pinned');
            }
        }
        else if (now_pos > position ){
            if(position < header_height) {
                $('.header').removeClass('header__pinned');
            }
        }
        now_pos = position;
    });

    /* Form Validate */
    $('.subscribe-form__input').keyup(function(){
        var email = $(this).val();
        if(email.length != 0){
            var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
            if(email.search(pattern) != 0){
                $(this).addClass('error');
                $('.subscribe-form__form').removeClass('email-valid');
                $('.subscribe-form__btn').addClass('disabled');
                $('.subscribe-form__btn').attr('disabled','disabled');
            } else {
                $(this).removeClass('error');
                $('.subscribe-form__form').addClass('email-valid');
                $('.subscribe-form__btn').removeClass('disabled');
                $('.subscribe-form__btn').removeAttr('disabled');
            }
        }
    });
    $('.subscribe-form__btn').on('click',function(){
        $('.modal').fadeIn(200).addClass('succes');
    });

    /* Scroll */
    $('.footer-top__link,.header-links__link').on('click', function() {
        var destination = $(this).data('destination');
        $('html, body').animate({scrollTop: $(destination).offset().top}, 1000);
    });

    /* Mpdal Window */
    $('.modal__close').click(function(){
        $('.modal').fadeOut(200).removeClass().addClass('modal');
    });
    $('.button-modal').click(function(){
        $('.modal').fadeIn(200);
    });

    /* Adaptive Message */
    $(window).resize(function(){
        if($(window).width()<1200){
            $('.adaptive').addClass('adaptive__show');
        } else {
            $('.adaptive').removeClass('adaptive__show');
        }
    });

});