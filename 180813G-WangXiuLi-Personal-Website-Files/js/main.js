/* Open */
function openNav(){
    document.getElementById("hamburgerNav").style.display = "block";
    document.getElementById("testimonials").style.display = "none";
    document.getElementById("work").style.display = "none";
}

/* Close */
function closeNav(){
    document.getElementById("hamburgerNav").style.display = "none";
    document.getElementById("testimonials").style.display = "block";
    document.getElementById("work").style.display = "block";
}

var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("box");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
    
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4600); // Change image every 2 seconds
}


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    
});


function openWork1(){
    document.getElementById("modal").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    document.getElementById("desktopNav").style.display = "none";
}

function openWork2(){
    document.getElementById("modal2").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork3(){
    document.getElementById("modal3").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork4(){
    document.getElementById("modal4").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork5(){
    document.getElementById("modal5").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork6(){
    document.getElementById("modal6").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork7(){
    document.getElementById("modal7").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork8(){
    document.getElementById("modal8").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork9(){
    document.getElementById("modal9").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork10(){
    document.getElementById("modal10").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function openWork11(){
    document.getElementById("modal11").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

//Get the button:
mybutton = document.getElementById("logo_btn");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(function(){
    $(".cover").slice(0, 6).show(); // select the first 6
    $("#loadmore").click(function(e){ // click event for load more
        e.preventDefault();
        $(".cover:hidden").slice(0, 6).show(); // select next 6 hidden divs and show them
        if ($(".cover:hidden").length==0){
            document.getElementById("loadmore").style.display = "none"; //once everything shown, hide button
        }
    });
});