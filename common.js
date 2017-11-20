$(document).ready(function(){

    $('.selectbox a').on('click', function(event){
        event.preventDefault();
    });

    $('.selectbox__main_option').on('click', function(){

        if ($('.selectbox__container').hasClass('selectbox__container__open')){
            $('.selectbox__container').removeClass('selectbox__container__open');
        } else {
            $('.selectbox__container').addClass('selectbox__container__open');
        }
    });

    $('.selectbox__list_option a').on('click', function(event){
        
        $('.selectbox__container').removeClass('selectbox__container__open');

        var href = $(this).attr('href');

        window.location = href;
    });
});