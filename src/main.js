let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});



/**
 *
 *  My code
 *
 */
let slider = tns({
  container : ".my-slider",
  "slideBy" : 2,
  "speed" : 300,
  "nav" : false,
  autoplay : true,
  controls: true,

  //Prem Modified
  controlsPosition: "bottom",
  controlsContainer: ".controls",
  //Prem Modified

  autoplayButtonOutput : false,
  responsive:{
    1600:{
      items : 4,
      gutter : 20
    },
    1024:{
      items: 3,
      gutter: 20
    },
    768: {
      items: 2,
      gutter: 20
    },
    480:{
      items: 1
    }
  }
})


/**
 *
 *  my code
 *
 */