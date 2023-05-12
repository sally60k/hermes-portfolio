$(document).ready(function(){
    //메인 슬라이드
    var swiper1 = new Swiper(".swiper1", {
        
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      //슬라이드에 마우스 대면 슬라이드 멈춤, 떼면 다시 재생
      $('.swiper1').mouseenter(function(){
        swiper1.autoplay.stop();
      });
      $('.swiper1').mouseleave(function(){
        swiper1.autoplay.start();
      });

      // 콜렉션 섹션 슬라이드
      var swiper2 = new Swiper(".swiper2", {
        slidesPerView: 2.7,
        spaceBetween: 50,
        freeMode: true,
      });

});//document