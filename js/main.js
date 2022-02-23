$(document).ready(function() {


    // Modal window 1

    $('#modal__btn-1').on('click', function() {
        $('.modal__body-1').fadeOut('fast', function() {
            $('.thanks__modal-1').fadeIn('fast');
        })
    });


    // Modal window 2

    $('#modal__open-2').on('click', function() {
            $('.modal-2').fadeIn('fast');
            $('.modal-2').css({display:'flex'});
    });

    $('#modal__btn-2').on('click', function() {
        $('.modal__body-2').fadeOut('fast', function() {
            $('.thanks__modal-2').fadeIn('fast');
        })
    });

    $(".modal-2, .modal__close").on("click", function (e) {
        if (e.target == this) {
            $(".modal-2").fadeOut('fast');
        };
      });



    // Modal window 3

    $('#modal__open-3').on('click', function() {
        $('.modal-3').fadeIn('fast');
        $('.modal-3').css({display:'flex'});
    });

    $('#modal__btn-3').on('click', function() {
        $('.modal__body-3').fadeOut('fast', function() {
            $('.thanks__modal-3').fadeIn('fast');
        })
    });


    $(".modal-3, .modal__close").on("click", function (e) {
        if (e.target == this) {
            $(".modal-3").fadeOut(300);
        };
    });

    // Modal window 4 

    $('#modal__open-4').on('click', function() {
        $('.modal-4').fadeIn('fast');
        $('.modal-4').css({display:'flex'});
    });

    $('#modal__btn-4').on('click', function() {
        $('.modal__body-4').fadeOut('fast', function() {
            $('.thanks__modal-4').fadeIn('fast');
        })
    });


    $(".modal-4, .modal__close").on("click", function (e) {
        if (e.target == this) {
            $(".modal-4").fadeOut(300);
        };
    });

    // Phone mask

    $('.phone').mask('+7(999) 999-9999', {placeholder: '+7 (000) 000-00-00' });
});