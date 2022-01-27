jQuery(document).ready(function(){


const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView:3,
        // breakpoints:{

        //   1920:{

        //     slidesPerView:3,
        //     spaceBetweenSlides: 50
        //   },
        //   1366:{

        //     slidesPerView:3,
        //     spaceBetweenSlides: 50
        //   },
        //   1023:{

        //     slidesPerView:2,
        //     spaceBetweenSlides: 50
        //   },
        //   767:{

        //     slidesPerView:1,
        //     spaceBetweenSlides: 50,
        //     centeredSlides: true,
        //   },
          
        // },
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows:true,


        },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
  
});



})
