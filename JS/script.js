$(document).ready(function(){

  let ww = window.innerWidth;

   
    responsiveSwiper();

    function responsiveSwiper() {
      if (ww >= 1600) {
        // swiper.destroy();
        var swiper = new Swiper(".mySwiper", {
          loop:false,
          speed: 400, 
          centeredSlides:true,     
          initialSlide:0, 
          slidesPerView: 'auto', 
          // effect: 'coverflow',
          // coverflowEffect:{
          //     rotate: 0, 
          //     slideShadows:true, 
          //     stretch:50, 
          //     depth: 200, 
          //     modifier: 1, 
          // },
          navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          }
        });
  
      }else {

      };
  }
   
    // var swiper = new Swiper(".secondSwiper", {
    //   direction: "vertical",
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

    // var swiper = new Swiper(".thirdSwiper", {
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });
 
    // var swiper = new Swiper(".boxSwiper", {
    //   effect: "cube",
    //   grabCursor: true,
    //   cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });

  $('#hamburger').click(function(){
    console.log('hhh')
    $(this).toggleClass('active');
    $('.side-main-menu').toggleClass('active');
    $('#hamburger span').toggleClass('active');
  });
  

  let btn = $('.top-btn');
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      btn.fadeIn();
    }else{
      btn.fadeOut();
    }
  });
  btn.on('click',function(){
    $('html,body').animate({
      scrollTop:0
    },1000);
  });
    
});