(function(){
    const swiper = new Swiper('.employees', {
        slidesPerView: 3,
        spaceBetween: 20,
        watchSlidesProgress: true,
        loop: true,
        speed: 400,

        autoplay: {
            delay: 4500,
        }, 
      
        navigation: {
          nextEl: '.employee__button--next',
          prevEl: '.employee__button--prev',
        },

        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 22,
            },
            1075: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1200: {
                spaceBetween: 30
            } 
        }
      });
})();