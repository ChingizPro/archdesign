(function(){
    const swiper = new Swiper('.employees', {
        slidesPerView: 3,
        spaceBetween: 30,
        watchSlidesProgress: true,
        loop: true,
        speed: 400,

        autoplay: {
            delay: 4500,
        }, 
      
        navigation: {
          nextEl: '.employee__button--next',
          prevEl: '.employee__button--prev',
        }
      });
})();