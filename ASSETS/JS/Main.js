
$(document).ready(function() {
  $('.marquee').marquee({
    duration: 9000,         // how fast it scrolls (ms)
    gap: 50,                 // space between loops
    delayBeforeStart: 0,
    direction: 'left',       // can also do 'up' for vertical
    duplicated: true,        // loops back seamlessly
    pauseOnHover: false      // slows down or pauses on hover
  });


  let typed = new Typed('#name-intro', {
      strings: ['Hey, I’m Ugwu Chetachukwu.B.', 'FullStack Developer.'],
      typeSpeed: 50,
      loop: true,
      backSpeed: 25,
      showCursor: false
    });
})