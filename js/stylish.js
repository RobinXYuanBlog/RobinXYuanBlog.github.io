(function($) {
    "use strict"; // Start of use strict

    $('.view-btn').click(function(){
//    window.location.hash = "#about";
        $('html,body').animate({scrollTop:$('#about').offset().top}, 1000, "easeInOutExpo");
    });

//     $('.btn-contact').click(function(){
// //    window.location.hash = "#about";
//         $('html,body').animate({scrollTop:$('#contact').offset().top + 3000}, 1000, "easeInOutExpo");
//     });

    // $(function () {
    //     $('.btn-contact').click(function () {
    //         var t = $('#contact').scrollTop().offset();
    //         $("html, body").animate({scrollTop:t}, 500, "easeInOutExpo");
    //     });
    // });

    function goDiv(div) {
        var a = $("#"+div).offset().top;
        $("html,body").animate({scrollTop:a}, 'slow');
    }
    
//    $(function(){
//        $("#ityped").typed({
//            strings: ["First sentence.", "Second sentence."],
//            typeSpeed: 0
//        });
//    });

    $(function(){
        $("#back-top").click(function() {
            $("html,body").animate({scrollTop:0}, 1500, "easeInOutExpo");
        });
    });

    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    // goDiv('contact');
})(jQuery); // End of use strict



































