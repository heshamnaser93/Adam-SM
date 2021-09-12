/******************** Start toggling mobile menu ********************/
$(document).on("click", ".menu-toggle", function(){
    $(".appmax-header-menu").toggleClass('closed opened');
    if($(".appmax-header-menu").hasClass('opened')){
        $('body').css("overflow-y","hidden");
    }
    else{
        $('body').css("overflow-y","unset");
    }
});
/******************** end toggling mobile menu ********************/




/******************** start web && mobile "system images" ********************/
/*onclick #web-btn*/
$("#web-btn").click(function() {
    $(this).addClass("active");
    $("#mobile-btn").removeClass("active");
});

/*onclick #mobile-btn*/
$("#mobile-btn").click(function() {
    $(this).addClass("active");
    $("#web-btn").removeClass("active");
});
/******************** end web && mobile "system images" ********************/




/******************** start mobile && web swiper slider area ********************/
$(document).ready(
    $("#web-slider-area").hide("fast")
);

$("#web-btn").click(function(){
    $("#mobile-slider-area").hide("fast");
    $("#web-slider-area").show("slow")
});

$("#mobile-btn").click(function(){
    $("#web-slider-area").hide("fast");
    $("#mobile-slider-area").show("slow");
});
/******************** end mobile && web swiper slider area ********************/





/**************** start stop automatic sliding "mobile pricing" ***************/
$(document).ready(
    $('#carouselExampleIndicators').carousel({
        interval: false,
        wrap: false
    }));
/************** end stop automatic sliding "mobile pricing" ************/




/************** start slide when touch "mobile pricing" ************/
$(".carousel").on("touchstart", function(event){
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
    });
});
/************** end slide when touch "mobile pricing" ************/




/******************** start mobile choices section ********************/
$(".plans-dropdown-item").click(function () {
    $(".plans-dropdown-item").removeClass("selection active");
    $(this).addClass("selection active");
    var selText = $(".selection").text();
    $("#dropdownMenuLink1").html(selText);
});
/******************** end mobile choices section ********************/




/******************** start change text for price "mobile pricing" ********************/
var planOnePrice = '.first-p-price',
    planTwoPrice = '.second-p-price',
    planThreePrice = '.third-p-price';

$(planOnePrice).text(58+'$');
$(planTwoPrice).text(38+'$');
$(planThreePrice).text(28+'$');


$('#first-students').click(function(){
    $(planOnePrice).text(58+'$');
    $(planTwoPrice).text(38+'$');
    $(planThreePrice).text(28+'$');
});

$('#second-students').click(function(){
    $(planOnePrice).text(57+'$');
    $(planTwoPrice).text(25+'$');
    $(planThreePrice).text(34+'$');
});

$('#third-students').click(function(){
    $(planOnePrice).text(25+'$');
    $(planTwoPrice).text(15+'$');
    $(planThreePrice).text(34+'$');
});

$('#fourth-students').click(function(){
    $(planOnePrice).text(89+'$');
    $(planTwoPrice).text(45+'$');
    $(planThreePrice).text(68+'$');
});

$('#fifth-students').click(function(){
    $(planOnePrice).text(56+'$');
    $(planTwoPrice).text(52+'$');
    $(planThreePrice).text(59+'$');
});

$('#sixth-students').click(function(){
    $(planOnePrice).text(35+'$');
    $(planTwoPrice).text(25+'$');
    $(planThreePrice).text(34+'$');
});
/******************** end change text for price "mobile pricing" ********************/





/************** start clients section ******************/
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
/************** end clients section ******************/




/******************** start certificates section ********************/
// Open the Modal
function openModal() {
    $("body").css("overflow-y","hidden");
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    $("body").css("overflow-y","unset");
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
}
/******************** end certificates section ********************/


TweenMax.to('body', 6, { backgroundPositionY: '0%', repeat: -1, yoyo: true, ease: Power0.easeNone });