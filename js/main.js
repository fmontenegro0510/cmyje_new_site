(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    //Back on top - Velocity
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 300, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

})(jQuery);



var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // Update the modal's content.
  //var modalTitle = exampleModal.querySelector('.modal-title')
  //modalTitle.textContent = 'Estados de Concursos'
 });


 var pdfViewer = document.getElementById('pdf-viewer');
 var audioContainer = document.getElementById('audio-container');
 var audio = document.getElementById('audio');

 function loadPDF() {
     pdfViewer.innerHTML = '<embed src="./media/24B/L.24.B.pdf" type="application/pdf" width="100%" height="100%">';
 }

 function closePDF() {
     pdfViewer.innerHTML = '';
     //audioContainer.style.display = 'none';
 }

 function playAudio() {
     audioContainer.style.display = 'block';
     audio.play();
 }

 function pauseAudio() {
     audio.pause();
 }

 function stopAudio() {
     audio.pause();
     audio.currentTime = 0;
    //  audioContainer.style.display = 'none';
 }
 function openLinkInNewTab() {
    window.open('https://digesto.legislaturachaco.gob.ar/Documentos/Ley/VistaPublicaLey/756', '_blank'); 
}


var progressBar = document.getElementById('progress');
var durationDisplay = document.getElementById('duration');

function updatePAudio() {
    var percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + '%';
    durationDisplay.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    if (secs < 10) {
        secs = '0' + secs;
    }
    return minutes + ':' + secs;
}


/**
 * tabs
 */

$(function () {
    $('#myTab li:last-child a').tab('show')
  })


/*en tabs*/