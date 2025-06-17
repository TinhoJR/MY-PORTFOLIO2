
$(document).ready(function() {
 
  const marqueeTrack = $(".marquee-track");
  const images = marqueeTrack.find("img")
  let LoadedCount = 0;

  images.each(function() {
    let img = $(this);

    if (img[0].complete) {
      LoadedCount++;
      if(LoadedCount === images.length) {
        marqueeTrack.addClass("animate-marquee")
      }
    }else{
      $(img).on("load", function () {
        LoadedCount++;
        if(LoadedCount === images.length) {
          marqueeTrack.addClass("animate-marquee")
        }
      })
    }
  });


  let typed = new Typed('#name-intro', {
      strings: ['Hey, I’m Ugwu Chetachukwu.B.', 'FullStack Developer.'],
      typeSpeed: 50,
      loop: true,
      backSpeed: 25,
      showCursor: false
    });
})