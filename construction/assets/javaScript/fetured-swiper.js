var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, 
      breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
        1250: {
            slidesPerView:3,
            spaceBetweenSlides:30,
        }
    }
  });


  document.querySelector('#featured-next').addEventListener('click',_=>{
    document.querySelector('.featured-button-previous').disabled = false;
    document.querySelector('.featured-button-previous').classList.remove('swiper-button-disabled');

    const nextButton =document.querySelector('.featured-button-next');

        if(!nextButton.classList.contains('swiper-button-disabled')){
            let nextButtonSwiper = document.querySelector('.swiper-button-next');
            nextButtonSwiper.click();
                if(nextButtonSwiper.classList.contains('swiper-button-disabled')){
                       nextButton.classList.add('swiper-button-disabled');
                }
        }else {
            nextButton.disabled = true
        }

  })

  document.querySelector('#featured-previos').addEventListener('click',_=>{

    document.querySelector('.featured-button-next').disabled = false;
    document.querySelector('.featured-button-next').classList.remove('swiper-button-disabled');

    const prevButton =document.querySelector('.featured-button-previous');
        if(!prevButton.classList.contains('swiper-button-disabled')){

            let prevButtonSwiper = document.querySelector('.swiper-button-prev');
            prevButtonSwiper.click();
                if(prevButtonSwiper.classList.contains('swiper-button-disabled')){
                       prevButton.classList.add('swiper-button-disabled');
                }
        }else {
            prevButton.disabled = true
        }

  })


