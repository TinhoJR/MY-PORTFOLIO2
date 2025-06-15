
$('.marquee').marquee({
    duration: 10000,         // how fast it scrolls (ms)
    gap: 50,                 // space between loops
    delayBeforeStart: 0,
    direction: 'left',       // can also do 'up' for vertical
    duplicated: true,        // loops back seamlessly
    pauseOnHover: true       // slows down or pauses on hover
  });