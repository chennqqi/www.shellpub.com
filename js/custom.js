
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-1.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });
  
  /*
  $(function() {
		  $.getJSON("https://api.shellpub.com/api/v1/cloud/stat",function(result,status,xhr){
		      $("#stat_year").setText(result.year);
		      $("#stat_end").setText(result.end);
		      $("#stat_total").setText(result.total);
		      $("#stat_count").setText(result.count);
		      $("#stat_black").setText(result.black+result.susp);
		  });
  });
	*/

   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

