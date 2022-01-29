(function(){
    const swiper = new Swiper('.main-swiper', {
        // Optional parameters
        loop: true,
        speed: 500,
        
        // Autoplay
        autoplay: {
          delay: 5000,
        }, 
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
})();