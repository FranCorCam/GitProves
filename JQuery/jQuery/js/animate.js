$(document).ready(function () {
    $.vegas('slideshow', {
        backgrounds: [
            {src: 'images/backgrounds/circuit.jpg', fade: 700,
                load: function () {
                    $('#texto1').show('slide', {direction: 'right'}, 1500);
                    $('#texto2').hide();
                    $('#texto3').hide();
                    $('#texto4').hide();
                    $('#texto5').hide();
                    $('#simg1').css({'background':'#2801A8','color':'white'});
                    $('#simg2').css({'background':'white','color':'black'});
                    $('#simg3').css({'background':'white','color':'black'});
                    $('#simg4').css({'background':'white','color':'black'});
                    $('#simg5').css({'background':'white','color':'black'});
                },
                complete: function () {

                }
            },
            {src: 'images/backgrounds/robots-fondo.jpg', fade: 700,
                load: function () {
                    $('#texto1').hide('slide', {direction: 'left'}, 1500);
                    $('#texto2').show('slide', {direction: 'right'}, 1500);
                    $('#texto3').hide('slide', {direction: 'left'}, 1500);
                    $('#texto4').hide('slide', {direction: 'left'}, 1500);
                    $('#texto5').hide('slide', {direction: 'left'}, 1500);
                    $('#simg1').css({'background':'white','color':'black'});
                    $('#simg2').css({'background':'#2801A8','color':'white'});
                    $('#simg3').css({'background':'white','color':'black'});
                    $('#simg4').css({'background':'white','color':'black'});
                    $('#simg5').css({'background':'white','color':'black'});
                },
                complete: function () {

                }
            },
            {src: 'images/backgrounds/IMG_1232-1024x768.jpg', fade: 700,
                load: function () {
                    $('#texto1').hide('slide', {direction: 'left'}, 1500);
                    $('#texto2').hide('slide', {direction: 'left'}, 1500);
                    $('#texto3').show('slide', {direction: 'right'}, 1500);
                    $('#texto4').hide('slide', {direction: 'left'}, 1500);
                    $('#texto5').hide('slide', {direction: 'left'}, 1500);
                    $('#simg1').css({'background':'white','color':'black'});
                    $('#simg2').css({'background':'white','color':'black'});
                    $('#simg3').css({'background':'#2801A8','color':'white'});
                    $('#simg4').css({'background':'white','color':'black'});
                    $('#simg5').css({'background':'white','color':'black'});
                },
                complete: function () {

                }
            },
            {src: 'images/backgrounds/background_pcb.jpg', fade: 700,
                load: function () {
                    $('#texto1').hide('slide', {direction: 'left'}, 1500);
                    $('#texto2').hide('slide', {direction: 'left'}, 1500);
                    $('#texto3').hide('slide', {direction: 'left'}, 1500);
                    $('#texto4').show('slide', {direction: 'right'}, 1500);
                    $('#texto5').hide('slide', {direction: 'left'}, 1500);
                    $('#simg1').css({'background':'white','color':'black'});
                    $('#simg2').css({'background':'white','color':'black'});
                    $('#simg3').css({'background':'white','color':'black'});
                    $('#simg4').css({'background':'#2801A8','color':'white'});
                    $('#simg5').css({'background':'white','color':'black'});
                },
                complete: function () {

                }
            },
            {src: 'images/backgrounds/people-fondo.jpg', fade: 700,
                load: function () {
                    $('#texto1').hide('slide', {direction: 'left'}, 1500);
                    $('#texto2').hide('slide', {direction: 'left'}, 1500);
                    $('#texto3').hide('slide', {direction: 'left'}, 1500);
                    $('#texto4').hide('slide', {direction: 'left'}, 1500);
                    $('#texto5').show('slide', {direction: 'right'}, 1500);
                    $('#simg1').css({'background':'white','color':'black'});
                    $('#simg2').css({'background':'white','color':'black'});
                    $('#simg3').css({'background':'white','color':'black'});
                    $('#simg4').css({'background':'white','color':'black'});
                    $('#simg5').css({'background':'#2801A8','color':'white'});
                },
                complete: function () {
                }
            }
        ], delay: [4500]
    })('overlay');
    $("body").css("overflow", "hidden");


    $('#fullscreen').click(function () {
        $("#texto1,#texto2,#texto3,#texto4,#texto5").css({
            transition: 'All 2s',
            transform: 'rotate(0deg) scale(1) skew(0deg) translate(-2000px)',
        });
     
        setTimeout(function () {
            $(".proves1").css({
                transition: 'All 1.4337s',
                transform: 'rotate(0deg) scale(1) skew(0deg) translate(0,2000px)'
            });
        }, 1000);

        setTimeout(function () {
            $(".proves1").css({
                display: 'none'
            });
        }, 2000);
        $.vegas('destroy', 'overlay');

    });
    $('.proves1').css({
        transition:'All 1.5s',
        transform: 'scale(1) rotate(0deg) translateY(-300px)',
        position: 'fixed',
        top:'100%'
       
    });





});

