$(document).ready(function(){

  $('.counting').each(function() {
    var $this = $(this),
    countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });  
  });

	$("div.features-post").hover(
	  function() {
	    $(this).find("div.content-hide").slideToggle("medium");
	  },
	  function() {
	    $(this).find("div.content-hide").slideToggle("medium");
	  }
	);

  $('.brand-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

	$('.hackathon-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

	$(".testimonial-carousel").slick({
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    loop: true,
    arrows: false,
    items: 1
  });
});