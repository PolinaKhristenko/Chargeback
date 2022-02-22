$(document).ready(function() {


    // Modal window 1

    $('#modal__btn-1').on('click', function() {
        $('.modal__body-1').hide('fast', function() {
            $('.thanks__modal-1').show('fast');
        })
    });


    // Modal window 2

    $('#modal__open-2').on('click', function() {
            $('.modal-2').show('fast');
            $('.modal-2').css({display:'flex'});
    });

    $('#modal__btn-2').on('click', function() {
        $('.modal__body-2').hide('fast', function() {
            $('.thanks__modal-2').show('fast');
        })
    });

    $('.modal__close').on('click', function(){
        $('.modal-2').hide('fast');
    });


    // Modal window 3

    $('#modal__open-3').on('click', function() {
        $('.modal-3').show('fast');
        $('.modal-3').css({display:'flex'});
    });

    $('#modal__btn-3').on('click', function() {
        $('.modal__body-3').hide('fast', function() {
            $('.thanks__modal-3').show('fast');
        })
    });

    $('.modal__close').on('click', function(){
        $('.modal-3').hide('fast');
    });


});